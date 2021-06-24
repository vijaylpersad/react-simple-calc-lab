import { useState } from 'react'

export default function Calculator() {
  const [operator, setOperator] = useState('+')
  const [numbers, setNumbers] = useState({
  num1: 0,
  num2: 0
  })
  const [result, setResult] = useState('')

	const setNum = (e, num) => {
  setNumbers({ 
    ...numbers,  
    [num]: e.target.value
  })
	}

	const calculate = (num1, num2) => {

		const int1 = Number(num1)
		const int2 = Number(num2)

		switch (operator){
		  case '+':
			  setResult(int1 + int2)
				break
    
      case '-':
				setResult(int1 - int2)
				break
    
      case '*':
				setResult(int1 * int2)
				break
    
      case '/':
         setResult(int1 / int2)
				break
			
			default:
        console.log(`${operator} is not a valid operator!`)
		}
	}

	// const setOp = (e) => {
	// 	this.setState({
	// 		operator: e.target.value
	// 	})
	// }

  return (
  <div className="container">
  <h1>Add with React!</h1>

  <div className="add">

  <input 
    type="number"
    name="num1" 
    placeholder="Enter your first number" 
    value={numbers.num1}
    onChange={ e => setNum(e, 'num1')}
  />

  <span>{operator}</span>
  
  <input 
    type="number"
    name="num2" 
    placeholder="Enter your second number" 
    value={numbers.num2}
    onChange={ e => setNum(e, 'num2')}
  />

  <button onClick={ () => calculate(numbers.num1, numbers.num2) }>=</button>

  <h3>{result}</h3>

  <button name="plus" value="+" onClick={e => setOperator(e.target.value)}>+</button>

  <button name="sub" value="-" onClick={e => setOperator(e.target.value)}>-</button>

  <button name="mult" value="*" onClick={e => setOperator(e.target.value)}>*</button>

  <button name="div" value="/" onClick={e => setOperator(e.target.value)}>/</button>
  </div>
  </div>
  )

}
