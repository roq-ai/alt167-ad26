interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'IT Technician', 'Sales Representative'],
  tenantName: 'Organization',
  applicationName: 'alt167',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
