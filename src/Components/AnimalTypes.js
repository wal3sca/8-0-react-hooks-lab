import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  // const [typeOfList, setTypeOfList] = useState()

  // const createList = animalTypes.map(pet, i) => {
  //   return(
  //     <Pet
  //     key={i + "hello"}
  //     name={pet.name}
  //     breed={pet.breed}
  //     kind={pet.kind}
  //   />
  //   )
  // }

  return (
    <section className={"animal-types"}>
      <h4>Animal Types</h4>
      <form>
        <label htmlFor="type">
          <input type="text" id="animal-type" />
        </label>
        <input type="submit" />
      </form>
      <ol></ol>
    </section>
  );
};

export default AnimalTypes;
