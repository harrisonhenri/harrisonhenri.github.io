import { ME } from './me';
import { LTDA } from './ltda';

const LINKS = Object.freeze({
  [LTDA.SELF]: Object.freeze({
    [LTDA.BOTICARIO]: 'https://www.grupoboticario.com.br',
  }),
  [ME.SELF]: Object.freeze({
    [ME.EMAIL]: 'mailto:harrisohenrisn@gmail.com',
    [ME.GIT_HUB]: 'https://github.com/harrisonhenri',
    [ME.DEV_TO]: 'https://dev.to/harrisonhenri',
    [ME.LINKEDIN]:
      'https://www.linkedin.com/in/harrison-henri-dos-santos-nascimento/',
  }),
});

export { LINKS };
