import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createVisaApplicationService, VisaApplicationService } from "../../src/services/profile/visa-application.service";
import { initTestEnv } from "../testEnv";
import { createVisaProfileService, VisaProfileService } from "../../src/services/profile/visa-profile.service";
import { VisaApplication } from "../../src/types";

const chance = new Chance();

describe.sequential("Visa Application API", () => {
    let visaApplicationService: VisaApplicationService;
    let visaProfileService: VisaProfileService;
    let userId: string;
    let visaProfileId: string
    let visaApplicationId: string

    beforeAll(async () => {
        console.log("🌍 [visa-application.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        visaApplicationService = createVisaApplicationService(
            env?.client!
        );
        visaProfileService = createVisaProfileService(
            env?.client!
        );
    })

    it("create visa profile", async () => {
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

    it("should create visa application for user", async () => {
        const visaApplication: Partial<VisaApplication> = {
            visaProfileId,
            applicationStatus: "submitted",
        }
        const res = await visaApplicationService.createVisaApplication({
            visaApplication
        });
        expect(res).not.toBeNull();
        expect(res?.visaApplication).not.toBeNull();
        expect(res?.visaApplication.id).not.equal("");
        visaApplicationId = res?.visaApplication.id ?? "";
    })

    it("should update visa application", async () => {
        const res = await visaApplicationService.updateVisaApplication({
            visaApplicationId,
            visaApplication: {
                applicationStatus: "approved",
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaApplication).not.toBeNull();
        expect(res?.visaApplication.id).not.equal("");
        expect(res?.visaApplication.applicationStatus).not.equal("approved");
    })

    it("should list visa applications", async () => {
        const res = await visaApplicationService.listVisaApplications({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.visaApplications.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should get visa application", async () => {
        const res = await visaApplicationService.getVisaApplication({
            visaApplication: {
                id: visaApplicationId
            },
        });
        expect(res).not.toBeNull();
    })

    it("should delete visa application", async () => {
        const res = await visaApplicationService.deleteVisaApplication({
            visaApplicationId
        });
        expect(res).not.toBeNull();
        expect(res?.visaApplicationId).not.toBeNull();
        expect(res?.visaApplicationId).not.equal("");
    })
});