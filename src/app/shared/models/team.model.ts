export interface Team {
    id: string;
    teamName: string;
    institution: string;
    program: string;
    members: string[];
    competitions: {
      competition1: number;
      competition2: number;
      competition3: number;
      competition4: number;
      competition5: number;
      total: number;
    };
  }