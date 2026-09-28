const employees = [
    {
        id: 1,
        firstName: "Maya",
        lastName: "Rodriguez",
        weekOneHours: 40,
        weekTwoHours: 36,
        hourlyRate: 18.50
    },
    {
        id: 2,
        firstName: "Jordan",
        lastName: "Lee",
        weekOneHours: 32,
        weekTwoHours: 38,
        hourlyRate: 21.25
    },
    {
        id: 3,
        firstName: "Sofia",
        lastName: "Patel",
        weekOneHours: 40,
        weekTwoHours: 40,
        hourlyRate: 17.75
    },
    {
        id: 4,
        firstName: "Marcus",
        lastName: "Chen",
        weekOneHours: 25,
        weekTwoHours: 31,
        hourlyRate: 24.00
    },
    {
        id: 5,
        firstName: "Aaliyah",
        lastName: "Brooks",
        weekOneHours: 42,
        weekTwoHours: 39,
        hourlyRate: 19.50
    },
    {
        id: 6,
        firstName: "Noah",
        lastName: "Williams",
        weekOneHours: 37,
        weekTwoHours: 35,
        hourlyRate: 22.00
    }
];

// Assignment 1, payroll deductions State Tax:3.5%, Federal Tax: 10.0%, Social Security: 6.2%
function calculatePayroll(employees) {
   let weekOnePay = employees.hourlyRate * employees.weekOneHours;
   console.log("Week One Pay Is " + weekOnePay);
}

calculatePayroll(employees);







