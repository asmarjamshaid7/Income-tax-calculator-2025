import React, {useState} from 'react';

function TaxApp () {
        const [income, setIncome]     = useState('');
        const incomeChange = (e) => {setIncome(e.target.value);};

        const handleKeyPress = (e) => {
            if(e.key === 'e' || e.key ==='E' || e.key === '-'){
                e.preventDefault();
            };
        }

        const CalculateTax = (income) => {
            let Tax = (0);
            if (income <= 600000) {
                Tax = 0;
            }
            else if (income > 600000 && income <= 1200000) {
                Tax = (income - 600000) * 0.05;
            }

            else if ( income > 1200000 && income <= 2200000 ) {
                Tax = (income - 1200000 ) * 0.15 + 30000 ;
            }

            else if (income > 2200000 && income <= 3200000) {
                Tax = (income - 2200000 ) * .25 + 180000;
            }
            else if (income > 3200000 && income <= 4100000) {
                Tax = (income - 3200000 ) * .3 + 430000;
            }
            else {
                Tax = (income - 3200000) * 0.3  + 700000;
            }
            return Tax;
        }

    const YearlyIncome = parseFloat(income) * 12 || 0;
    const Tax = CalculateTax(YearlyIncome);
    const MonthlyTax = Tax / 12;
    const MonthlyIncome = income;
    const MonthlyIncomeAfterTax =  parseFloat(income) - MonthlyTax || 0;
    const YearlyTax = Tax;
    const YearIncomeAfterTax = MonthlyIncomeAfterTax * 12;
    
    return ( 
    
        <div className='form-wrapper'>
            <div className='headings'>
                <h1>Income Tax Calculator for Pakistan 2024-2025 Tax Year</h1>
                <h4>Calculate the income tax on salary using the following calculator based on the 2024-2025 federal budget.</h4>
            </div>
            
    <form className='container'>
            
            <input onChange={incomeChange} 
             placeholder='Enter Monthly Income'
             type='number'
             name='incomeAmount'
             value={income}
             min={0}
             onKeyDown={handleKeyPress}
            />
        
        <div className='ParaContainer'>

        <h3>Monthly Breakdown</h3>
            <p className='left-align-div' >Monthly Income </p>
                <p className='right-align-div'>PKR {Math.round(MonthlyIncome).toLocaleString()}</p>
            <p className='left-align-div'>Monthly tax</p>
                <p className='right-align-div'>PKR {Math.round(MonthlyTax).toLocaleString()}</p>
            <p className='left-align-div'>Monthly Income after Tax</p>
                <p className='right-align-div'>PKR {Math.round(MonthlyIncomeAfterTax).toLocaleString()}</p>
                <h3>Yearly Breakdown</h3>
            <p className='left-align-div'>Yearly Income</p>
                <p className='right-align-div'>PKR {Math.round(YearlyIncome).toLocaleString()}</p>
            <p className='left-align-div'>Yearly Tax</p>
                <p className='right-align-div'>PKR {Math.round(YearlyTax).toLocaleString()}</p>
            <p className='left-align-div'>Yearly Income after Tax</p>
                <p className='right-align-div'>PKR {Math.round(YearIncomeAfterTax).toLocaleString()}</p>
                
        </div>
    </form>
    
    </div>
    )
}
export default TaxApp; 