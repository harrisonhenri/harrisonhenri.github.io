import { ME } from './me';
import { LTDA } from './ltda';

const LINKS = Object.freeze({
  [LTDA.SELF]: Object.freeze({
    [LTDA.PEDEPRONTO]: 'https://www.pedepronto.com',
  }),
  [ME.SELF]: Object.freeze({
    [ME.EMAIL]: 'mailto:harrisohenrisn@gmail.com',
    [ME.GIT_HUB]: 'https://github.com/HarrisonHenri',
    [ME.DEV_TO]: 'https://dev.to/harrisonhenri',
    [ME.LINKEDIN]:
      'https://www.linkedin.com/in/harrison-henri-dos-santos-nascimento/',
  }),
});

export { LINKS };
