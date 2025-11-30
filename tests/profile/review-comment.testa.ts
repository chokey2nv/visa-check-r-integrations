import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createVisaProfileService, VisaProfileService } from "../../src/services/profile/visa-profile.service";
import { createVisaProfileReviewCommentService, VisaProfileReviewCommentService } from "../../src/services/profile/review-comment.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("Review Comment API", () => {
    let visaProfileReviewCommentId: string;
    let visaProfileId: string;

    let visaProfileService: VisaProfileService;
    let reviewCommentService: VisaProfileReviewCommentService;

    beforeAll(async () => {
        console.log("🌍 [visa-profile-review-comment.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        const userId = env?.userId ?? "";
        visaProfileService = createVisaProfileService(
            env?.client!
        );
        reviewCommentService = createVisaProfileReviewCommentService(
            env?.client!
        );
        const res = await visaProfileService.createVisaProfile({
            visaProfile: {
                countryOfBirth: chance.country(),
                dateOfBirth: chance.date().toISOString(),
                destinationCountry: chance.country(),
                userIds: [userId],
                countriesVisitedInPast5Years: [chance.country(), chance.country(), chance.country(), chance.country(), chance.country()],
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfile).not.toBeNull();
        expect(res?.visaProfile.id).not.equal("");
        visaProfileId = res?.visaProfile.id ?? "";
    })

    it("should create review comment", async () => {
        const res = await reviewCommentService.createVisaProfileReviewComment({
            visaProfileReviewComment: {
                comment: chance.string(),
                visaProfileChecklistItemId: chance.string(),
                isRoot: "yes",
                visaProfileId
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileReviewComment).not.toBeNull();
        expect(res?.visaProfileReviewComment.id).not.equal("");
        visaProfileReviewCommentId = res?.visaProfileReviewComment.id ?? "";
    })

    it("should get review comment", async () => {
        const res = await reviewCommentService.getVisaProfileReviewComment({
            visaProfileReviewComment: {
                id: visaProfileReviewCommentId
            },
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileReviewComment.id).not.equal("");
    })

    it("should update review comment", async () => {
        const res = await reviewCommentService.updateVisaProfileReviewComment({
            visaProfileReviewCommentId,
            visaProfileReviewComment: {
                comment: chance.string(),
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileReviewComment).not.toBeNull();
        expect(res?.visaProfileReviewComment.id).not.equal("");
    })

    it("should list review comments", async () => {
        const res = await reviewCommentService.listVisaProfileReviewComments({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileReviewComments.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should delete review comment", async () => {
        const res = await reviewCommentService.deleteVisaProfileReviewComment({
            visaProfileReviewCommentId
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileReviewCommentId).not.toBeNull();
        expect(res?.visaProfileReviewCommentId).not.equal("");
    })
})