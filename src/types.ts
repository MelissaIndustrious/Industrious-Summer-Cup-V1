export interface Region {
  id: string;
  name: string;
  occupancy: number;
  points: number;
  continent: 'North America' | 'Europe';
  locations: string[];
}

export interface PointsRule {
  name: string;
  description: string;
  points: number;
  tier: 1 | 2;
}
