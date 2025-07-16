const calculators = {
  calc1: {
    id: "calc1",
    title: "Advanced Calculator",
    description: "Performs basic arithmetic operations: addition, subtraction, multiplication, and division",
    inputs: [
      { id: 'A', label: 'First Number', type: 'number', placeholder: '12' },
      { id: 'B', label: 'Second Number', type: 'number', placeholder: '4' },
      { id: 'operation', label: 'Operation', type: 'select', options: ['Add', 'Subtract', 'Multiply', 'Divide'] }
    ],
    calculate: ({ A, B, operation }) => {
      const a = parseFloat(A);
      const b = parseFloat(B);
      let result;
      
      switch (operation) {
        case 'Add':
          result = a + b;
          break;
        case 'Subtract':
          result = a - b;
          break;
        case 'Multiply':
          result = a * b;
          break;
        case 'Divide':
          result = b !== 0 ? a / b : 'Cannot divide by zero';
          break;
        default:
          result = 'Invalid operation';
      }
      
      return {
        value: typeof result === 'number' ? result.toFixed(2) : result,
        unit: '',
        interpretation: `${a} ${operation.toLowerCase()} ${b} = ${result}`
      };
    }
  },

  calc2: {
    id: "calc2",
    title: "Square-Root Calculator",
    description: "Finds the principal (positive) square root of any non-negative number",
    inputs: [
      { id: 'A', label: 'Number', type: 'number', placeholder: '49' }
    ],
    calculate: ({ A }) => {
      const num = parseFloat(A);
      if (num < 0) {
        return {
          value: 'Error',
          unit: '',
          interpretation: 'Cannot find square root of negative number'
        };
      }
      const result = Math.sqrt(num);
      return {
        value: result.toFixed(3),
        unit: '',
        interpretation: `√${num} = ${result.toFixed(3)}`
      };
    }
  },

  calc3: {
    id: "calc3",
    title: "Percentage Calculator",
    description: "Calculates what percent one number is of another",
    inputs: [
      { id: 'A', label: 'Part', type: 'number', placeholder: '25' },
      { id: 'B', label: 'Whole', type: 'number', placeholder: '200' }
    ],
    calculate: ({ A, B }) => {
      const part = parseFloat(A);
      const whole = parseFloat(B);
      if (whole === 0) {
        return {
          value: 'Error',
          unit: '',
          interpretation: 'Cannot divide by zero'
        };
      }
      const percentage = (part / whole) * 100;
      return {
        value: percentage.toFixed(2),
        unit: '%',
        interpretation: `${part} is ${percentage.toFixed(2)}% of ${whole}`
      };
    }
  },

  calc4: {
    id: "calc4",
    title: "Simple-Interest Calculator",
    description: "Computes simple interest on a principal over time at a fixed annual rate",
    inputs: [
      { id: 'P', label: 'Principal Amount', type: 'number', placeholder: '1000' },
      { id: 'R', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '5' },
      { id: 'T', label: 'Time (Years)', type: 'number', placeholder: '2' }
    ],
    calculate: ({ P, R, T }) => {
      const principal = parseFloat(P);
      const rate = parseFloat(R);
      const time = parseFloat(T);
      const interest = (principal * rate * time) / 100;
      const total = principal + interest;
      return {
        value: interest.toFixed(2),
        unit: '₹',
        interpretation: `Simple Interest: ₹${interest.toFixed(2)}, Total Amount: ₹${total.toFixed(2)}`
      };
    }
  },

  calc5: {
    id: "calc5",
    title: "Circle-Area Calculator",
    description: "Finds the area of a circle from its radius",
    inputs: [
      { id: 'r', label: 'Radius', type: 'number', placeholder: '3' }
    ],
    calculate: ({ r }) => {
      const radius = parseFloat(r);
      const area = Math.PI * radius * radius;
      return {
        value: area.toFixed(2),
        unit: 'sq units',
        interpretation: `Area of circle with radius ${radius} is ${area.toFixed(2)} square units`
      };
    }
  },

  calc6: {
    id: "calc6",
    title: "BMI Calculator",
    description: "Evaluates Body-Mass Index from weight and height",
    inputs: [
      { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '70' },
      { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '175' }
    ],
    calculate: ({ weight, height }) => {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      return {
        value: bmi.toFixed(1),
        unit: 'BMI',
        interpretation:
          bmi < 18.5
            ? 'Underweight'
            : bmi < 25
            ? 'Normal'
            : bmi < 30
            ? 'Overweight'
            : 'Obese'
      };
    }
  },

  calc7: {
    id: "calc7",
    title: "Temperature Converter",
    description: "Converts Celsius to Fahrenheit (or vice-versa)",
    inputs: [
      { id: 'temperature', label: 'Temperature Value', type: 'number', placeholder: '25' },
      { id: 'unit', label: 'Convert From', type: 'select', options: ['Celsius', 'Fahrenheit'] }
    ],
    calculate: ({ temperature, unit }) => {
      const temp = parseFloat(temperature);
      let result, resultUnit;
      
      if (unit === 'Celsius') {
        result = (temp * 9/5) + 32;
        resultUnit = '°F';
      } else {
        result = (temp - 32) * 5/9;
        resultUnit = '°C';
      }
      
      return {
        value: result.toFixed(1),
        unit: resultUnit,
        interpretation: `${temp}°${unit === 'Celsius' ? 'C' : 'F'} = ${result.toFixed(1)}${resultUnit}`
      };
    }
  },

  calc8: {
    id: "calc8",
    title: "Speed / Distance / Time Calculator",
    description: "Finds any one of speed, distance or time when two are known",
    inputs: [
      { id: 'calculate', label: 'Calculate', type: 'select', options: ['Speed', 'Distance', 'Time'] },
      { id: 'value1', label: 'Known Value 1', type: 'number', placeholder: '150' },
      { id: 'value2', label: 'Known Value 2', type: 'number', placeholder: '3' }
    ],
    calculate: ({ calculate, value1, value2 }) => {
      const val1 = parseFloat(value1);
      const val2 = parseFloat(value2);
      let result, unit;
      
      switch (calculate) {
        case 'Speed':
          result = val1 / val2;
          unit = 'km/h';
          break;
        case 'Distance':
          result = val1 * val2;
          unit = 'km';
          break;
        case 'Time':
          result = val1 / val2;
          unit = 'hours';
          break;
      }
      
      return {
        value: result.toFixed(2),
        unit: unit,
        interpretation: `${calculate}: ${result.toFixed(2)} ${unit}`
      };
    }
  },

  calc9: {
    id: "calc9",
    title: "Compound-Interest Calculator",
    description: "Computes future value with interest compounded at regular intervals",
    inputs: [
      { id: 'P', label: 'Principal Amount', type: 'number', placeholder: '5000' },
      { id: 'r', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '6' },
      { id: 'n', label: 'Compounds per Year', type: 'number', placeholder: '4' },
      { id: 't', label: 'Time (Years)', type: 'number', placeholder: '5' }
    ],
    calculate: ({ P, r, n, t }) => {
      const principal = parseFloat(P);
      const rate = parseFloat(r) / 100;
      const compounds = parseFloat(n);
      const time = parseFloat(t);
      const amount = principal * Math.pow(1 + rate/compounds, compounds * time);
      const interest = amount - principal;
      return {
        value: amount.toFixed(2),
        unit: '₹',
        interpretation: `Compound Interest: ₹${interest.toFixed(2)}, Total Amount: ₹${amount.toFixed(2)}`
      };
    }
  },

  calc10: {
    id: "calc10",
    title: "Loan EMI Calculator",
    description: "Finds fixed Equated Monthly Installment for a loan",
    inputs: [
      { id: 'P', label: 'Principal Amount', type: 'number', placeholder: '300000' },
      { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '8' },
      { id: 'N', label: 'Loan Term (Months)', type: 'number', placeholder: '60' }
    ],
    calculate: ({ P, rate, N }) => {
      const principal = parseFloat(P);
      const monthlyRate = parseFloat(rate) / 1200;
      const months = parseFloat(N);
      const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      const totalAmount = emi * months;
      const totalInterest = totalAmount - principal;
      return {
        value: emi.toFixed(2),
        unit: '₹/month',
        interpretation: `EMI: ₹${emi.toFixed(2)}, Total Interest: ₹${totalInterest.toFixed(2)}`
      };
    }
  },

  calc11: {
    id: "calc11",
    title: "CAGR Calculator",
    description: "Computes compound annual growth rate between two values",
    inputs: [
      { id: 'PV', label: 'Initial Value', type: 'number', placeholder: '10000' },
      { id: 'FV', label: 'Final Value', type: 'number', placeholder: '18000' },
      { id: 't', label: 'Time (Years)', type: 'number', placeholder: '3' }
    ],
    calculate: ({ PV, FV, t }) => {
      const initial = parseFloat(PV);
      const final = parseFloat(FV);
      const time = parseFloat(t);
      const cagr = (Math.pow(final / initial, 1/time) - 1) * 100;
      return {
        value: cagr.toFixed(2),
        unit: '%',
        interpretation: `CAGR over ${time} years: ${cagr.toFixed(2)}%`
      };
    }
  },

  calc12: {
    id: "calc12",
    title: "Body-Fat % Calculator (US Navy)",
    description: "Estimates body-fat percentage using circumference method",
    inputs: [
      { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
      { id: 'waist', label: 'Waist Circumference (cm)', type: 'number', placeholder: '85' },
      { id: 'neck', label: 'Neck Circumference (cm)', type: 'number', placeholder: '40' },
      { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '180' },
      { id: 'hip', label: 'Hip Circumference (cm) - Women only', type: 'number', placeholder: '95' }
    ],
    calculate: ({ gender, waist, neck, height, hip }) => {
      const w = parseFloat(waist);
      const n = parseFloat(neck);
      const h = parseFloat(height);
      let bodyFat;
      
      if (gender === 'Male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      } else {
        const hi = parseFloat(hip) || 0;
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
      }
      
      return {
        value: bodyFat.toFixed(1),
        unit: '%',
        interpretation: `Body Fat: ${bodyFat.toFixed(1)}%`
      };
    }
  },

  calc13: {
    id: "calc13",
    title: "BMR Calculator (Mifflin-St Jeor)",
    description: "Calculates Basal Metabolic Rate (daily calories at rest)",
    inputs: [
      { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
      { id: 'weight', label: 'Weight (kg)', type: 'number', placeholder: '70' },
      { id: 'height', label: 'Height (cm)', type: 'number', placeholder: '175' },
      { id: 'age', label: 'Age (years)', type: 'number', placeholder: '25' }
    ],
    calculate: ({ gender, weight, height, age }) => {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      let bmr;
      
      if (gender === 'Male') {
        bmr = 10 * w + 6.25 * h - 5 * a + 5;
      } else {
        bmr = 10 * w + 6.25 * h - 5 * a - 161;
      }
      
      return {
        value: bmr.toFixed(0),
        unit: 'kcal/day',
        interpretation: `BMR: ${bmr.toFixed(0)} calories per day`
      };
    }
  },

  calc14: {
    id: "calc14",
    title: "Daily Calorie Needs (TDEE)",
    description: "Finds Total Daily Energy Expenditure using BMR × activity factor",
    inputs: [
      { id: 'BMR', label: 'Basal Metabolic Rate (kcal/day)', type: 'number', placeholder: '1674' },
      { id: 'activityLevel', label: 'Activity Level', type: 'select', options: ['Sedentary (1.2)', 'Lightly Active (1.375)', 'Moderately Active (1.55)', 'Very Active (1.725)', 'Super Active (1.9)'] }
    ],
    calculate: ({ BMR, activityLevel }) => {
      const bmr = parseFloat(BMR);
      const factor = parseFloat(activityLevel.match(/\(([^)]+)\)/)[1]);
      const tdee = bmr * factor;
      return {
        value: tdee.toFixed(0),
        unit: 'kcal/day',
        interpretation: `TDEE: ${tdee.toFixed(0)} calories per day`
      };
    }
  },

  calc15: {
    id: "calc15",
    title: "Rectangle-Area Calculator",
    description: "Computes area and perimeter of a rectangle",
    inputs: [
      { id: 'L', label: 'Length', type: 'number', placeholder: '8' },
      { id: 'W', label: 'Width', type: 'number', placeholder: '5' }
    ],
    calculate: ({ L, W }) => {
      const length = parseFloat(L);
      const width = parseFloat(W);
      const area = length * width;
      const perimeter = 2 * (length + width);
      return {
        value: area.toFixed(2),
        unit: 'sq units',
        interpretation: `Area: ${area.toFixed(2)} sq units, Perimeter: ${perimeter.toFixed(2)} units`
      };
    }
  },

  calc16: {
    id: "calc16",
    title: "Circle Circumference Calculator",
    description: "Finds the circumference of a circle",
    inputs: [
      { id: 'r', label: 'Radius', type: 'number', placeholder: '3' }
    ],
    calculate: ({ r }) => {
      const radius = parseFloat(r);
      const circumference = 2 * Math.PI * radius;
      return {
        value: circumference.toFixed(2),
        unit: 'units',
        interpretation: `Circumference: ${circumference.toFixed(2)} units`
      };
    }
  },

  calc17: {
    id: "calc17",
    title: "Triangle-Area (Heron) Calculator",
    description: "Uses Heron's formula to find area from three sides",
    inputs: [
      { id: 'a', label: 'Side A', type: 'number', placeholder: '3' },
      { id: 'b', label: 'Side B', type: 'number', placeholder: '4' },
      { id: 'c', label: 'Side C', type: 'number', placeholder: '5' }
    ],
    calculate: ({ a, b, c }) => {
      const sideA = parseFloat(a);
      const sideB = parseFloat(b);
      const sideC = parseFloat(c);
      const s = (sideA + sideB + sideC) / 2;
      const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
      return {
        value: area.toFixed(2),
        unit: 'sq units',
        interpretation: `Triangle area: ${area.toFixed(2)} square units`
      };
    }
  },

  calc18: {
    id: "calc18",
    title: "Sphere Volume Calculator",
    description: "Finds volume and surface area of a sphere",
    inputs: [
      { id: 'r', label: 'Radius', type: 'number', placeholder: '2' }
    ],
    calculate: ({ r }) => {
      const radius = parseFloat(r);
      const volume = (4/3) * Math.PI * Math.pow(radius, 3);
      const surface = 4 * Math.PI * Math.pow(radius, 2);
      return {
        value: volume.toFixed(2),
        unit: 'cubic units',
        interpretation: `Volume: ${volume.toFixed(2)} cubic units, Surface: ${surface.toFixed(2)} sq units`
      };
    }
  },

  calc19: {
    id: "calc19",
    title: "Cylinder Calculator",
    description: "Computes volume and surface area of a right circular cylinder",
    inputs: [
      { id: 'r', label: 'Radius', type: 'number', placeholder: '3' },
      { id: 'h', label: 'Height', type: 'number', placeholder: '10' }
    ],
    calculate: ({ r, h }) => {
      const radius = parseFloat(r);
      const height = parseFloat(h);
      const volume = Math.PI * Math.pow(radius, 2) * height;
      const surface = 2 * Math.PI * radius * (radius + height);
      return {
        value: volume.toFixed(2),
        unit: 'cubic units',
        interpretation: `Volume: ${volume.toFixed(2)} cubic units, Surface: ${surface.toFixed(2)} sq units`
      };
    }
  },

  calc20: {
    id: "calc20",
    title: "Quadratic-Equation Solver",
    description: "Finds roots of ax²+bx+c=0 using quadratic formula",
    inputs: [
      { id: 'a', label: 'Coefficient a', type: 'number', placeholder: '2' },
      { id: 'b', label: 'Coefficient b', type: 'number', placeholder: '-7' },
      { id: 'c', label: 'Coefficient c', type: 'number', placeholder: '3' }
    ],
    calculate: ({ a, b, c }) => {
      const A = parseFloat(a);
      const B = parseFloat(b);
      const C = parseFloat(c);
      const discriminant = B * B - 4 * A * C;
      
      if (discriminant < 0) {
        return {
          value: 'No real roots',
          unit: '',
          interpretation: 'No real solutions exist'
        };
      }
      
      const root1 = (-B + Math.sqrt(discriminant)) / (2 * A);
      const root2 = (-B - Math.sqrt(discriminant)) / (2 * A);
      
      return {
        value: `${root1.toFixed(2)}, ${root2.toFixed(2)}`,
        unit: '',
        interpretation: `Roots: x₁ = ${root1.toFixed(2)}, x₂ = ${root2.toFixed(2)}`
      };
    }
  },

  calc21: {
    id: "calc21",
    title: "LCM Calculator",
    description: "Finds least common multiple of two integers",
    inputs: [
      { id: 'a', label: 'First Number', type: 'number', placeholder: '12' },
      { id: 'b', label: 'Second Number', type: 'number', placeholder: '18' }
    ],
    calculate: ({ a, b }) => {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const num1 = parseInt(a);
      const num2 = parseInt(b);
      const lcm = Math.abs(num1 * num2) / gcd(num1, num2);
      return {
        value: lcm.toString(),
        unit: '',
        interpretation: `LCM of ${num1} and ${num2} is ${lcm}`
      };
    }
  },

  calc22: {
    id: "calc22",
    title: "GCD (HCF) Calculator",
    description: "Finds greatest common divisor of two integers via Euclidean algorithm",
    inputs: [
      { id: 'a', label: 'First Number', type: 'number', placeholder: '56' },
      { id: 'b', label: 'Second Number', type: 'number', placeholder: '98' }
    ],
    calculate: ({ a, b }) => {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const num1 = parseInt(a);
      const num2 = parseInt(b);
      const result = gcd(num1, num2);
      return {
        value: result.toString(),
        unit: '',
        interpretation: `GCD of ${num1} and ${num2} is ${result}`
      };
    }
  },

  calc23: {
    id: "calc23",
    title: "Single-Event Probability",
    description: "Computes probability of a favourable outcome",
    inputs: [
      { id: 'favorable', label: 'Favorable Outcomes', type: 'number', placeholder: '1' },
      { id: 'total', label: 'Total Outcomes', type: 'number', placeholder: '6' }
    ],
    calculate: ({ favorable, total }) => {
      const fav = parseFloat(favorable);
      const tot = parseFloat(total);
      const probability = fav / tot;
      const percentage = probability * 100;
      return {
        value: probability.toFixed(4),
        unit: '',
        interpretation: `Probability: ${probability.toFixed(4)} or ${percentage.toFixed(2)}%`
      };
    }
  },

  calc24: {
    id: "calc24",
    title: "Permutation Calculator (nPr)",
    description: "Counts ordered arrangements of r objects from n",
    inputs: [
      { id: 'n', label: 'Total Objects (n)', type: 'number', placeholder: '5' },
      { id: 'r', label: 'Objects to Arrange (r)', type: 'number', placeholder: '2' }
    ],
    calculate: ({ n, r }) => {
      const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);
      const N = parseInt(n);
      const R = parseInt(r);
      const permutation = factorial(N) / factorial(N - R);
      return {
        value: permutation.toString(),
        unit: '',
        interpretation: `${N}P${R} = ${permutation} permutations`
      };
    }
  },

  calc25: {
    id: "calc25",
    title: "Combination Calculator (nCr)",
    description: "Counts unordered selections of r objects from n",
    inputs: [
      { id: 'n', label: 'Total Objects (n)', type: 'number', placeholder: '5' },
      { id: 'r', label: 'Objects to Select (r)', type: 'number', placeholder: '2' }
    ],
    calculate: ({ n, r }) => {
      const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);
      const N = parseInt(n);
      const R = parseInt(r);
      const combination = factorial(N) / (factorial(R) * factorial(N - R));
      return {
        value: combination.toString(),
        unit: '',
        interpretation: `${N}C${R} = ${combination} combinations`
      };
    }
  },

  calc26: {
    id: "calc26",
    title: "Mean (Average) Calculator",
    description: "Finds arithmetic mean of a data set",
    inputs: [
      { id: 'data', label: 'Data Values (comma-separated)', type: 'text', placeholder: '4, 8, 6, 2' }
    ],
    calculate: ({ data }) => {
      const values = data.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
      const sum = values.reduce((a, b) => a + b, 0);
      const mean = sum / values.length;
      return {
        value: mean.toFixed(2),
        unit: '',
        interpretation: `Mean of ${values.length} values: ${mean.toFixed(2)}`
      };
    }
  },

  calc27: {
    id: "calc27",
    title: "Median Calculator",
    description: "Finds the middle value in a sorted list of numbers",
    inputs: [
      { id: 'data', label: 'Data Values (comma-separated)', type: 'text', placeholder: '3, 5, 7, 2, 4' }
    ],
    calculate: ({ data }) => {
      const values = data.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x)).sort((a, b) => a - b);
      const n = values.length;
      const median = n % 2 === 0 ? (values[n/2 - 1] + values[n/2]) / 2 : values[Math.floor(n/2)];
      return {
        value: median.toFixed(2),
        unit: '',
        interpretation: `Median of ${n} values: ${median.toFixed(2)}`
      };
    }
  },

  calc28: {
    id: "calc28",
    title: "Mode Calculator",
    description: "Finds the most frequent value(s) in a dataset",
    inputs: [
      { id: 'data', label: 'Data Values (comma-separated)', type: 'text', placeholder: '2, 4, 4, 6, 6, 6' }
    ],
    calculate: ({ data }) => {
      const values = data.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
      const frequency = {};
      values.forEach(val => frequency[val] = (frequency[val] || 0) + 1);
      const maxFreq = Math.max(...Object.values(frequency));
      const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq);
      return {
        value: modes.join(', '),
        unit: '',
        interpretation: `Mode(s): ${modes.join(', ')} (appears ${maxFreq} times)`
      };
    }
  },

  calc29: {
    id: "calc29",
    title: "Standard Deviation Calculator",
    description: "Computes standard deviation (σ) of a dataset",
    inputs: [
      { id: 'data', label: 'Data Values (comma-separated)', type: 'text', placeholder: '2, 4, 4, 4, 5, 5, 7, 9' }
    ],
    calculate: ({ data }) => {
      const values = data.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
      const stdDev = Math.sqrt(variance);
      return {
        value: stdDev.toFixed(3),
        unit: '',
        interpretation: `Standard Deviation: ${stdDev.toFixed(3)}`
      };
    },
     calc30: {
    id: "calc30",
    title: "Z-Score Calculator",
    description: "Calculates how many standard deviations a value is from the mean.",
    inputs: [
      { id: 'X', label: 'Value (X)', type: 'number', placeholder: '85' },
      { id: 'mu', label: 'Mean (μ)', type: 'number', placeholder: '70' },
      { id: 'sigma', label: 'Standard Deviation (σ)', type: 'number', placeholder: '10' }
    ],
    calculate: ({ X, mu, sigma }) => {
      const z = (X - mu) / sigma;
      return {
        value: z.toFixed(3),
        unit: '',
        interpretation: `Z-score: ${z.toFixed(3)}`
      };
    }
  },

  calc31: {
    id: "calc31",
    title: "Exponentiation Calculator",
    description: "Computes A raised to the power of B.",
    inputs: [
      { id: 'A', label: 'Base (A)', type: 'number', placeholder: '2' },
      { id: 'B', label: 'Exponent (B)', type: 'number', placeholder: '3' }
    ],
    calculate: ({ A, B }) => {
      const result = Math.pow(A, B);
      return {
        value: result,
        unit: '',
        interpretation: `${A} raised to the power of ${B} is ${result}`
      };
    }
  },

  calc32: {
    id: "calc32",
    title: "Logarithm Calculator",
    description: "Computes the logarithm of a number with a given base.",
    inputs: [
      { id: 'base', label: 'Base (a)', type: 'number', placeholder: '10' },
      { id: 'value', label: 'Value (B)', type: 'number', placeholder: '100' }
    ],
    calculate: ({ base, value }) => {
      const result = Math.log(value) / Math.log(base);
      return {
        value: result.toFixed(5),
        unit: '',
        interpretation: `log base ${base} of ${value} is ${result.toFixed(5)}`
      };
    }
  },

  calc33: {
    id: "calc33",
    title: "Savings Goal Calculator",
    description: "Estimates required monthly savings to reach a goal amount.",
    inputs: [
      { id: 'FV', label: 'Future Value (₹)', type: 'number', placeholder: '100000' },
      { id: 'r', label: 'Monthly Interest Rate (%)', type: 'number', placeholder: '1' },
      { id: 'n', label: 'Months', type: 'number', placeholder: '12' }
    ],
    calculate: ({ FV, r, n }) => {
      const monthlyRate = r / 100;
      const PMT = FV * (monthlyRate / (Math.pow(1 + monthlyRate, n) - 1));
      return {
        value: PMT.toFixed(2),
        unit: '₹',
        interpretation: `You need to save ₹${PMT.toFixed(2)} per month`
      };
    }
  },

  calc34: {
    id: "calc34",
    title: "Discount Calculator",
    description: "Calculates discount and final price after discount.",
    inputs: [
      { id: 'MRP', label: 'Original Price (MRP)', type: 'number', placeholder: '1000' },
      { id: 'D', label: 'Discount (%)', type: 'number', placeholder: '20' }
    ],
    calculate: ({ MRP, D }) => {
      const discount = (MRP * D) / 100;
      const finalPrice = MRP - discount;
      return {
        value: finalPrice.toFixed(2),
        unit: '₹',
        interpretation: `You save ₹${discount.toFixed(2)}. Final price: ₹${finalPrice.toFixed(2)}`
      };
    }
  },

  calc35: {
    id: "calc35",
    title: "Work-Energy Calculator",
    description: "Calculates work done when force is applied over distance.",
    inputs: [
      { id: 'F', label: 'Force (N)', type: 'number', placeholder: '10' },
      { id: 'd', label: 'Distance (m)', type: 'number', placeholder: '5' }
    ],
    calculate: ({ F, d }) => {
      const work = F * d;
      return {
        value: work.toFixed(2),
        unit: 'Joules',
        interpretation: `Work done: ${work.toFixed(2)} J`
      };
    }
  },

  calc36: {
    id: "calc36",
    title: "Kinetic Energy Calculator",
    description: "Computes kinetic energy of an object in motion.",
    inputs: [
      { id: 'm', label: 'Mass (kg)', type: 'number', placeholder: '50' },
      { id: 'v', label: 'Velocity (m/s)', type: 'number', placeholder: '10' }
    ],
    calculate: ({ m, v }) => {
      const KE = 0.5 * m * v * v;
      return {
        value: KE.toFixed(2),
        unit: 'Joules',
        interpretation: `Kinetic Energy: ${KE.toFixed(2)} J`
      };
    }
  }
  }
};

export default  calculators;