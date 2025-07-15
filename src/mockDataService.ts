import { Stakeholder, Security, Company } from './types';

export class MockDataService {
    private stakeholders: Stakeholder[] = [
      { id: '1', name: 'Alice Chen', type: 'founder', email: 'alice@startup.com' },
      { id: '2', name: 'Bob Smith', type: 'founder', email: 'bob@startup.com' },
      { id: '3', name: 'Carol Davis', type: 'employee', email: 'carol@startup.com' },
      { id: '4', name: 'Acme Ventures', type: 'investor', email: 'partner@acme.vc' },
      // ... more stakeholders
    ];
  
    private securities: Security[] = [
      {
        id: 's1',
        stakeholderId: '1',
        securityType: 'common',
        shares: 2500000,
        dateIssued: '2023-01-01',
        vestingSchedule: {
          startDate: '2023-01-01',
          cliffMonths: 12,
          vestingMonths: 48
        }
      },
      // ... more securities
    ];
  
    async getStakeholders(): Promise<Stakeholder[]> {
      return new Promise(resolve => setTimeout(() => resolve(this.stakeholders), 300));
    }
  
    async getSecurities(): Promise<Security[]> {
      return new Promise(resolve => setTimeout(() => resolve(this.securities), 300));
    }
  
    async getCompany(): Promise<Company> {
      return new Promise(resolve => setTimeout(() => resolve({
        name: 'TechStartup Inc.',
        totalSharesAuthorized: 10000000,
        totalSharesIssued: 7500000,
        lastValuation: 50000000,
        lastValuationDate: '2024-01-01'
      }), 300));
    }
  
    // Simulates real-time updates
    subscribeToUpdates(callback: (security: Security) => void): () => void {
      const interval = setInterval(() => {
        const randomSecurity = this.securities[Math.floor(Math.random() * this.securities.length)];
        const updatedSecurity = {
          ...randomSecurity,
          shares: randomSecurity.shares + Math.floor(Math.random() * 1000) - 500
        };
        callback(updatedSecurity);
      }, 5000);
  
      return () => clearInterval(interval);
    }
  }