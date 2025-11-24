import { Chance } from "chance";
import { beforeAll, describe, expect, it } from "vitest";
import { createConsultantAssignmentService, ConsultantAssignmentService } from "../../src/services/profile/consultant-assignment.service";
import { initTestEnv } from "../testEnv";
import { createVisaProfileService, VisaProfileService } from "../../src/services/profile/visa-profile.service";
import { createUserService, UserService } from "../../src/services/user/user.service";

const chance = new Chance();

describe("Consultant Assignment API", () => {

    let visaProfileService: VisaProfileService;
    let consultantAssignmentService: ConsultantAssignmentService;
    let userService: UserService;
    let visaProfileId: string;
    let consultantId: string;
    let consultantAssignmentId: string;
    
    beforeAll(async () => {
        console.log("🌍 [consultant-assignment.test.ts] Running once for all tests...");

        const env = await initTestEnv();
        const userId = env?.userId ?? "";
        consultantAssignmentService = createConsultantAssignmentService(
            env?.client!
        );
        visaProfileService = createVisaProfileService(
            env?.client!
        )
        userService = createUserService(
            env?.client!
        )
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

        const res2 = await userService.createUser({
            user: {
                fullName: chance.name(),
                email: chance.email(),
                userType: "consultant",
            },
        });
        expect(res2).not.toBeNull();
        expect(res2?.user).not.toBeNull();
        expect(res2?.user.id).not.equal("");
        consultantId = res2?.user.id ?? "";
    })

    it("create consultant assignment", async () => {
        const res = await consultantAssignmentService.createConsultantAssignment({
            consultantAssignment: {
                consultantId,
                visaProfileId,
            }
        });
        expect(res).not.toBeNull();
        expect(res?.consultantAssignment).not.toBeNull();
        expect(res?.consultantAssignment.id).not.equal("");
        consultantAssignmentId = res?.consultantAssignment.id ?? "";
    })

    it("should get consultant assignment", async () => {
        const res = await consultantAssignmentService.getConsultantAssignment({
            consultantAssignment: {
                id: consultantAssignmentId
            },
        });
        expect(res).not.toBeNull();
    })

    it("should update consultant assignment", async () => {
        const res = await consultantAssignmentService.updateConsultantAssignment({
            consultantAssignmentId,
            consultantAssignment: {
                consultantId,
                visaProfileId,
            }
        });
        expect(res).not.toBeNull();
        expect(res?.consultantAssignment).not.toBeNull();
        expect(res?.consultantAssignment.id).not.equal("");
    })

    it("should list consultant assignments", async () => {
        const res = await consultantAssignmentService.listConsultantAssignments({
            skip: 0,
            limit: 100
        });
        expect(res).not.toBeNull();
        expect(res?.consultantAssignments.length).not.equal(0);
        expect(res?.total).not.equal(0);
    })

    it("should delete consultant assignment", async () => {
        const res = await consultantAssignmentService.deleteConsultantAssignment({
            consultantAssignmentId
        });
        expect(res).not.toBeNull();
        expect(res?.consultantAssignmentId).not.toBeNull();
        expect(res?.consultantAssignmentId).not.equal("");
    })
});