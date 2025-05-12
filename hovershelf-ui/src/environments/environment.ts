import { IEnvironment } from './ienvironment';

export const environment: IEnvironment = {
  production: true,
  isMock: false,
  baseUrl: `https://api.passport.dev.euromonitor.com`,
  apiUrl: `/passportai-search-api`,
  statisticSearchApiUrl: `/passport-search/statistics/text`,
  analysisTab: `/Analysis/Tab`,
  TrinityWebTokenApiUrl: 'https://passport.qa.euromonitor.com/portal/Account/Token',
  cdnUrl: 'assets',
  loadStandAlone: false,
  isQa: false,
  HelpCentreHowAiWorksUrl: "/portal/helpcentre/AiLimitationArticle",
  HelpCentreWhatQuestionCanBeAsked: "/portal/helpcentre/AiWhatQuestionCanBeAsked"
};
