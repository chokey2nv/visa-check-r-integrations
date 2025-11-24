import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { VisaProfileService } from "../../src/services/profile/visa-profile.service";
import { createVisaProfileService } from "../../src/services/profile/visa-profile.service";
import { createReadinessScoreReviewService, ReadinessScoreReviewService } from "../../src/services/profile/rs-review.service";
import { initTestEnv } from "../testEnv";

const chance = new Chance();

describe.sequential("RS Review API", () => {
    let visaProfileService: VisaProfileService;
    let readinessScoreReviewService: ReadinessScoreReviewService;
    let readinessScoreReviewId: string;
    let visaProfileId: string;

    beforeAll(async () => {
        console.log("🌍 [visa-profile.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        const userId = env?.userId ?? "";
        visaProfileService = createVisaProfileService(
            env?.client!
        );
        readinessScoreReviewService = createReadinessScoreReviewService(
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

    it("create readiness score review", async () => {
        const res = await readinessScoreReviewService.createReadinessScoreReview({
            readinessScoreReview: {
                visaProfileId,
                score: 2,
                review: chance.paragraph()
            }
        });
        expect(res).not.toBeNull();
        expect(res?.readinessScoreReview).not.toBeNull();
        expect(res?.readinessScoreReview.id).not.equal("");
        readinessScoreReviewId = res?.readinessScoreReview.id ?? "";
    })

    it("should get readiness score review", async () => {
        const res = await readinessScoreReviewService.getReadinessScoreReview({
            readinessScoreReview: {
                id: readinessScoreReviewId
            },
        });
        expect(res).not.toBeNull();
    })

    it("should update readiness score review", async () => {
        const res = await readinessScoreReviewService.updateReadinessScoreReview({
            readinessScoreReviewId,
            readinessScoreReview: {
                review: chance.paragraph()
            }
        });
        expect(res).not.toBeNull();
        expect(res?.readinessScoreReview).not.toBeNull();
        expect(res?.readinessScoreReview.id).not.equal("");
    })

    it("should list readiness score reviews", async () => {
        const res = await readinessScoreReviewService.listReadinessScoreReviews({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.readinessScoreReviews.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should delete readiness score review", async () => {
        const res = await readinessScoreReviewService.deleteReadinessScoreReview({
            readinessScoreReviewId
        });
        expect(res).not.toBeNull();
        expect(res?.readinessScoreReviewId).not.toBeNull();
        expect(res?.readinessScoreReviewId).not.equal("");
    })
})