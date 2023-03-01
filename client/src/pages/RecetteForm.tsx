import { useEffect, useState } from 'react'
import { Form, Formik } from 'formik';
import { createRecipe } from '../api/recep.api';

export type Recipe = {
  title: string;
  description: string;
  author: any;
  ingredientes: Array<any>;
  
}

function RecetteForm() {

  const [recipe, setRecipe] = useState()




  return (
    <div className='formulario'>
      <h1 className='nueva'>Nueva Receta</h1>
      <Formik 
        initialValues={{
          _id:'',
          title: '',
          description: '',
          author:{username:''},
          time:'',
          tags: [],
         
         
        }}
        onSubmit={(values) => {
          console.log(values)
          createRecipe(values)
        }}
      >
        {({ handleChange, handleSubmit }) => (

          <Form onSubmit={handleSubmit} >
            <div className='receta-formulario'>

            <label>Nombre de la Recette</label>
            <input
              className='formulario-input'
              type="text"
              name='title'
              placeholder='Nombre de la Recette'
              onChange={handleChange}
            />
            <br />
            <div className='username'>
            <label>Username</label>
            <input
              className='formulario-input1'
              type="text"
              name='author'
              placeholder='Username'
              onChange={handleChange}
            />
            </div>
            <br />
            <label>Tiempo de Cocina</label>
            <input
              className='formulario-input2'
              type="text"
              name='Tiempo de Cocina'
              placeholder='añade tus ingredientes'
              onChange={handleChange}
            />
             <br />
            <label>Tags de la Receta</label>
            <input
              className='formulario-input3'
              type="text"
              name='Tags de la Receta'
              placeholder='añade tus ingredientes'
              onChange={handleChange}
            />
            </div>

           

            <button className='new-receta'>Añadir Nueva Receta</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RecetteForm