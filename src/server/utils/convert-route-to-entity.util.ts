const mapping: Record<string, string> = {
  administrators: 'administrator',
  'it-technicians': 'it_technician',
  organizations: 'organization',
  roles: 'role',
  'sales-representatives': 'sales_representative',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
