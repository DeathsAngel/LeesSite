import { ConfigService } from '@common/services';

export function configLoaderFactory(configService: ConfigService) {
  return () => configService.loadConfig();
}
