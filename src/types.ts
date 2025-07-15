export interface Stakeholder {
    id: string;
    name: string;
    type: 'founder' | 'employee' | 'investor';
    email: string;
  }
  
  export interface Security {
    id: string;
    stakeholderId: string;
    securityType: 'common' | 'preferred' | 'option';
    shares: number;
    vestingSchedule?: {
      startDate: string;
      cliffMonths: number;
      vestingMonths: number;
    };
    exercisePrice?: number;
    dateIssued: string;
  }
  
  export interface Company {
    name: string;
    totalSharesAuthorized: number;
    totalSharesIssued: number;
    lastValuation: number;
    lastValuationDate: string;
  }