import BsCardComponent from "components/BsCard.component";
import { useState } from "react";

const originalData = [
  {
    id: "12321334",
    title: "mustang",
    description: "the best land car",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "12321d34",
    title: "cadillac",
    description: "the best land car",
    img: "https://media.ed.edmunds-media.com/cadillac/escalade/2023/oem/2023_cadillac_escalade_4dr-suv_premium-luxury_fq_oem_1_1280.jpg",
  },
  {
    id: "14f3211",
    title: "hummer",
    description: "another ev car",
    img: "https://media.ed.edmunds-media.com/gmc/hummer-ev/2022/oem/2022_gmc_hummer-ev_crew-cab-pickup_edition-1_fq_oem_1_1600.jpg",
  },
];

const CarsPanelPage = () => {
  const [carsArr, setCarsArr] = useState(originalData);
  const handleDeleteCar = (id) => {
    console.log("you pressed on delete, came from parent");
    let newCarsArr = JSON.parse(JSON.stringify(carsArr));
    newCarsArr = newCarsArr.filter((item) => item.id !== id);
    setCarsArr(newCarsArr);
  };
  return (
    <div className="d-flex">
      <div className="d-flex">
        {carsArr.map((item) => (
          <BsCardComponent
            key={"cars" + item.id}
            btn="delete"
            {...item}
            onDelete={handleDeleteCar}
          />
        ))}
      </div>
    </div>
  );
};
export default CarsPanelPage;
