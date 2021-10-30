import { SetMetadata } from '@nestjs/common';
import { Constants } from '../../Constants';
import { MetricOptions } from '@opentelemetry/api-metrics';
import { DecoratorType } from './DecoratorType';

export const Observer = (name?: string, options?: MetricOptions) =>
  SetMetadata(Constants.METRIC_METADATA, {
    name,
    options,
    type: DecoratorType.OBSERVER,
  });