export interface IPerson {
  id: number;
  name: string;
  avatar: string;
  sex: string;
  phone: string;
  adress: string;
  skills: ISkill[];
  deeds: IDeeds[];
  created_at: string;
  updated_at: string;
}

export interface ISkill {
  id: number;
  person_id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface IDeeds {
  id: number;
  person_id: number;
  description: string;
  created_at: string;
  updated_at: string;
}
