import { useState } from 'react'

export default function Calculator() {

  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState('')
  const [numbers, setNumbers] = useState({
    num1: 0,
    num2: 0
  })


	const setNum = (e, num) => {
		setNumbers({ 
      ...numbers,
			[num]: e.target.value
		})
	}

	const calculate = (num1, num2) => {

		let int1 = Number(num1)
		let int2 = Number(num2)
		let math = 0
		switch (operator){
			case '+':
				math = int1 + int2
				break

			case '-':
				math = int1 - int2
				break

			case '*':
				math = int1 * int2
				break

			case '/':
				math = int1 / int2
				break
			
			default:
				break
		}

    setResult(math)
	}

	const setOp = (e) => {
    setOperator(e.target.value)
	}

		return (
			<div className="container">
				<h1>Add with React!</h1>

				<div className="add">

					<input 
            type="number"
            name="num1" 
            placeholder="Enter your first number" 
            value={numbers.num1}
            onChange={ (e) => setNum(e, 'num1')}
					 />

					<span>{operator}</span>
					
					<input 
            type="number"
            name="num2" 
            placeholder="Enter your second number" 
            value={numbers.num2}
            onChange={ (e) => setNum(e, 'num2')}
					 />

					<button onClick={ () => calculate(numbers.num1, numbers.num2) }>=</button>
					<h3>{result}</h3>
					<button name="plus" value="+" onClick={(e)=> setOp(e)}>+</button>
					<button name="sub" value="-" onClick={(e)=> setOp(e)}>-</button>
					<button name="mult" value="*" onClick={(e)=> setOp(e)}>*</button>
					<button name="div" value="/" onClick={(e)=> setOp(e)}>/</button>
				</div>
			</div>
		)

}