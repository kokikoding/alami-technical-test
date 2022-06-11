//
//  RCTDeviceInfoModule.m
//  AlamiTechnicalTest
//
//  Created by Muhammad Hendra Pranajaya on 11/06/22.
//

#import "RCTDeviceInfoModule.h"

@implementation RCTDeviceInfoModule

RCT_EXPORT_MODULE(DeviceInfoModule);

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getDeviceID) {
  return [[[UIDevice currentDevice] identifierForVendor] UUIDString];
}

@end
