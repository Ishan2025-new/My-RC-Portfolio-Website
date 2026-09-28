import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  Calculator, 
  DollarSign, 
  PieChart as PieChartIcon, 
  FileCheck,
  RefreshCw
} from 'lucide-react';

export const PlannerSimulator: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(65000);
  const [housingExpense, setHousingExpense] = useState<number>(18000);
  const [livingExpense, setLivingExpense] = useState<number>(14000);
  const [debtPayments, setDebtPayments] = useState<number>(6000);
  const [discretionary, setDiscretionary] = useState<number>(7000);
  const [riskTolerance, setRiskTolerance] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');

  // Calculations
  const stats = useMemo(() => {
    const totalExpenses = housingExpense + livingExpense + debtPayments + discretionary;
    const monthlySavings = Math.max(0, monthlyIncome - totalExpenses);
    const savingsRate = Math.round((monthlySavings / monthlyIncome) * 100);
    const dtiRatio = Math.round((debtPayments / monthlyIncome) * 100);
    const emergencyRunwayMonths = monthlySavings > 0 ? (monthlySavings * 12) / totalExpenses : 0;

    // Financial Health Score algorithm
    let score = 50;
    if (savingsRate >= 30) score += 25;
    else if (savingsRate >= 20) score += 18;
    else if (savingsRate >= 10) score += 10;
    else score -= 15;

    if (dtiRatio <= 15) score += 15;
    else if (dtiRatio <= 30) score += 5;
    else score -= 20;

    if (housingExpense / monthlyIncome <= 0.3) score += 10;
    else score -= 10;

    const normalizedScore = Math.min(100, Math.max(10, score));

    // Asset allocation recommendation based on risk
    const allocation = {
      equity: riskTolerance === 'aggressive' ? 70 : riskTolerance === 'moderate' ? 50 : 25,
      debt: riskTolerance === 'aggressive' ? 20 : riskTolerance === 'moderate' ? 35 : 55,
      emergencyCash: riskTolerance === 'aggressive' ? 10 : riskTolerance === 'moderate' ? 15 : 20
    };

    return {
      totalExpenses,
      monthlySavings,
      savingsRate,
      dtiRatio,
      normalizedScore,
      emergencyRunwayMonths: emergencyRunwayMonths.toFixed(1),
      allocation
    };
  }, [monthlyIncome, housingExpense, livingExpense, debtPayments, discretionary, riskTolerance]);

  return (
    <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-pine)] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator · MCA Major Project Algorithm</span>
          </div>
          <h3 className="text-xl font-bold font-serif text-[var(--text-primary)]">
            Intelligent Financial Health Analyzer
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Test the automated diagnostic engine developed in Python &amp; Pandas right here in your browser.
          </p>
        </div>

        <button
          onClick={() => {
            setMonthlyIncome(65000);
            setHousingExpense(18000);
            setLivingExpense(14000);
            setDebtPayments(6000);
            setDiscretionary(7000);
            setRiskTolerance('moderate');
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md border border-[var(--border-subtle)] hover:bg-[var(--bg-canvas)] text-[var(--text-secondary)] transition-all"
        >
          <RefreshCw className="w-3 h-3" />
          Reset Parameters
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input sliders */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-[var(--text-secondary)]">Monthly Take-Home Income</span>
              <span className="font-mono text-[var(--text-primary)] font-bold">₹{monthlyIncome.toLocaleString('en-IN')}</span>
            </div>
            <input 
              type="range"
              min="20000"
              max="250000"
              step="5000"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full h-1.5 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-pine)]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-[var(--text-secondary)]">Housing / Rent</span>
                <span className="font-mono text-[var(--text-primary)]">₹{housingExpense.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min="5000"
                max="80000"
                step="1000"
                value={housingExpense}
                onChange={(e) => setHousingExpense(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-pine)]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-[var(--text-secondary)]">Food &amp; Utilities</span>
                <span className="font-mono text-[var(--text-primary)]">₹{livingExpense.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min="3000"
                max="50000"
                step="1000"
                value={livingExpense}
                onChange={(e) => setLivingExpense(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-pine)]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-[var(--text-secondary)]">EMI / Debt Payments</span>
                <span className="font-mono text-[var(--text-primary)]">₹{debtPayments.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min="0"
                max="40000"
                step="1000"
                value={debtPayments}
                onChange={(e) => setDebtPayments(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-pine)]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-[var(--text-secondary)]">Lifestyle &amp; Misc</span>
                <span className="font-mono text-[var(--text-primary)]">₹{discretionary.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min="1000"
                max="40000"
                step="1000"
                value={discretionary}
                onChange={(e) => setDiscretionary(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--border-strong)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-pine)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
              Investor Risk Profile (Asset Allocation Model)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['conservative', 'moderate', 'aggressive'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRiskTolerance(r)}
                  className={`py-1.5 text-xs font-medium rounded-md border capitalize transition-all ${
                    riskTolerance === r
                      ? 'border-[var(--accent-pine)] bg-[var(--accent-pine)] text-white'
                      : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Automated Output Dashboard */}
        <div className="lg:col-span-6 flex flex-col justify-between rounded-xl bg-[var(--bg-canvas)] p-5 border border-[var(--border-subtle)]">
          <div>
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">Savings Rate</div>
                <div className="text-xl font-bold font-mono text-[var(--accent-pine)] mt-0.5">
                  {stats.savingsRate}%
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">DTI Ratio</div>
                <div className="text-xl font-bold font-mono text-slate-800 dark:text-slate-100 mt-0.5">
                  {stats.dtiRatio}%
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center">
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">Health Score</div>
                <div className="text-xl font-bold font-mono text-[var(--accent-brass)] mt-0.5">
                  {stats.normalizedScore}/100
                </div>
              </div>
            </div>

            {/* Expense vs Savings Distribution Bar */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1 font-mono">
                <span>Expenses: ₹{stats.totalExpenses.toLocaleString('en-IN')}</span>
                <span className="text-[var(--accent-pine)] font-semibold">Net Savings: ₹{stats.monthlySavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                <div 
                  className="bg-amber-600 h-full transition-all duration-300" 
                  style={{ width: `${Math.min(100, (stats.totalExpenses / monthlyIncome) * 100)}%` }}
                  title="Expenses"
                />
                <div 
                  className="bg-[var(--accent-pine)] h-full transition-all duration-300" 
                  style={{ width: `${Math.max(0, (stats.monthlySavings / monthlyIncome) * 100)}%` }}
                  title="Surplus Savings"
                />
              </div>
            </div>

            {/* Asset Allocation Recommendation */}
            <div className="mb-4 p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="text-xs font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[var(--accent-pine)]" />
                Target Model Allocation ({riskTolerance})
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                <div className="p-1.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Equity / Growth</div>
                  <div className="font-bold text-[var(--text-primary)]">{stats.allocation.equity}%</div>
                </div>
                <div className="p-1.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Debt / Bonds</div>
                  <div className="font-bold text-[var(--text-primary)]">{stats.allocation.debt}%</div>
                </div>
                <div className="p-1.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                  <div className="text-[10px] text-[var(--text-secondary)]">Emergency Cash</div>
                  <div className="font-bold text-[var(--text-primary)]">{stats.allocation.emergencyCash}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Automated System Advice Text */}
          <div className="pt-3 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-primary)]">Diagnostic Summary: </span>
            {stats.monthlySavings <= 0 ? (
              <span className="text-rose-600 dark:text-rose-400">
                Warning: Expenses exceed income. Immediate deficit mitigation required. Reduce discretionary spending.
              </span>
            ) : stats.savingsRate >= 30 ? (
              <span>
                Excellent financial hygiene! You save {stats.savingsRate}% of monthly earnings. Reinvest ₹{stats.monthlySavings.toLocaleString('en-IN')} across diversified indices and emergency liquid reserves.
              </span>
            ) : (
              <span>
                Balanced budget with a {stats.savingsRate}% savings rate. Aim to increase monthly surplus to 30% by optimizing fixed commitments and capping discretionary expenditure.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
