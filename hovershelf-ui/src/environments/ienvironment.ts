import { InjectionToken } from "@angular/core";

export const EnvironmentConfigToken = new InjectionToken<IEnvironment>('IEnvironment');
export interface IEnvironment {
    baseUrl: string;
    apiUrl: string;
    statisticSearchApiUrl: string;
    production: boolean;
    TrinityWebTokenApiUrl: string;
    analysisTab: string;
    isMock: boolean;
    loadStandAlone: boolean;
    isQa: boolean;
    cdnUrl:string;
    HelpCentreHowAiWorksUrl:string;
    HelpCentreWhatQuestionCanBeAsked:string
  }
