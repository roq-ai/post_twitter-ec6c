import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TweetInterface {
  id?: string;
  content: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TweetGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  organization_id?: string;
  user_id?: string;
}
