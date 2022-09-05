import React from 'react'
import Image from './img/people.svg'


function App() {
  const [coment, setComents] = React.useState()
  const [allComents, setAllComents] = React.useState([])

  function handleClickButton() {
    const allOldComents = [...allComents, coment]

    setAllComents(allOldComents)
  }

  function handleTextArea(event) {
    setComents(event.target.value)
  }

  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea onChange={handleTextArea}></textarea>
      <button isOn={coment}  onClick={handleClickButton}>Comentar</button>

      <ul>
        {
          allComents.map((cmt, index) => (
            <li key={index}>{cmt}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;