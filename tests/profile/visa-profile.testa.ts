import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { GlobalTestEnv, initTestEnv } from "../testEnv";
import { createVisaProfileService } from "../../src/services/profile/visa-profile.service";
import { VisaProfileService } from "../../src/services/profile/visa-profile.service";
const chance = new Chance();

describe.sequential("Visa Profile API", () => {
    
    let visaProfileService: VisaProfileService;
    let userId: string;
    let visaProfileId: string;

    beforeAll(async () => {
        console.log("🌍 [visa-profile.test.ts] Running once for all tests...");
        const env = await initTestEnv();
        userId = env?.userId ?? "";
        visaProfileService = createVisaProfileService(
            env?.client!
        );
    })

    it("should create visa profile for user", async () => {
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

    it("should update visa profile", async () => {
        const res = await visaProfileService.updateVisaProfile({
            visaProfileId,
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
    })

    it("should list visa profiles", async () => {
        const res = await visaProfileService.listVisaProfiles({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfiles.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should get visa profile", async () => {
        const res = await visaProfileService.getVisaProfile({
            visaProfile: {
                id: visaProfileId
            }
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfile).not.toBeNull();
        expect(res?.visaProfile.id).not.equal("");
    })

    it("should delete visa profile", async () => {
        const res = await visaProfileService.deleteVisaProfile({
            visaProfileId
        });
        expect(res).not.toBeNull();
        expect(res?.visaProfileId).not.toBeNull();
        expect(res?.visaProfileId).not.equal("");
    })
})