import {UserResponse} from "../core/user/dto/UserAPIContracts";

export type ScreenParamList = {
    Splash: undefined;
    Welcome: undefined;
    WelcomeUS: undefined;
    Welcome2US: undefined;
    WelcomeRepeat: { patientId: string};
    WelcomeRepeatUS: { patientId: string};
    Terms: undefined;
    NursesConsentUS: undefined;
    BeforeWeStartUS: undefined;
    TermsOfUse: undefined;
    PrivacyPolicyUK: undefined;
    PrivacyPolicyUS: undefined;
    ResetPassword: undefined;
    ResetPasswordConfirm: undefined;
    Register: undefined;
    OptionalInfo: { user: UserResponse };
    HealthWorkerExposure: { patientId: string };
    YourStudy: { patientId: string };
    YourWork: { patientId: string };
    AboutYou: { patientId: string };
    YourHealth: { patientId: string, isMale: boolean};
    CovidTest: { patientId: string, assessmentId: string | null};
    HowYouFeel: { assessmentId: string };
    DescribeSymptoms: { assessmentId: string };
    WhereAreYou: { assessmentId: string };
    LevelOfIsolation: { assessmentId: string };
    TreatmentSelection:  { assessmentId: string, location?: string };
    TreatmentOther: { assessmentId: string, location?: string };
    ThankYou: undefined;
    Login: { terms: string };
    CountrySelect: { patientId: string | null };
};
