import styled from "styled-components";

const Info = () => {
  return (
    <Container>
      <FirstChild>
        <h3 className="title">
          Logement entier : villa ⸱ Chez Orgon Tourist Agency
        </h3>
        <p className="info">
          <span>{"10"} voyageurs</span> - <span>{"4"} chambres</span> -{" "}
          <span>{"5"} lits</span> - <span>{"4"} salle de bain</span>
        </p>
        <p className="description-1">
          Le Luxury Villa Lighthouse Ligero avec jacuzzi est situé sur l'île de
          Host, à 20 m de la mer, à 5 km de la plage de galets Milna et à 2,8 km
          du centre de Vis. Luxury Villa Lighthouse Ligero s'étend sur 91 m2 de
          surface habitable sur une propriété de 44000 m2. La Villa se compose
          de deux étages. La Luxury Villa Lighthouse Ligero dispose de 4
          chambres avec une salle de bains privative et des douches. Luxury
          Villa Lighthouse Ligero est idéal pour un hébergement de luxe de 8 + 2
          personnes.
        </p>
        <h4>Le logement</h4>
        <p className="description-2">
          Le Luxury Villa Lighthouse Ligero avec jacuzzi est situé sur l'île de
          Host, à 20 m de la mer, à 5 km de la plage de galets Milna et à 2,8 km
          du centre de Vis. <br /> Luxury Villa Lighthouse Ligero s'étend sur 91
          m2 de surface habitable sur une propriété de 44000 m2. La Villa se
          compose de deux étages. La Luxury Villa Lighthouse Ligero dispose de 4
          chambres avec une salle de bains privative et des douches. Le Luxury
          Villa Lighthouse Ligero est idéal pour un hébergement de luxe de 8 + 2
          personnes.
        </p>
      </FirstChild>
      <SecondChild>
        <Box>
          <p className="title">
            <span>1 400 €</span> nuit
          </p>
          <form>
            <div className="border">
              <div className="layout">
                <div>
                  <label htmlFor="arrive">Arrivée</label>
                  <input type="date" name="arrive" />
                </div>
                <div>
                  <label htmlFor="depart">Départ</label>
                  <input type="date" name="depart" />
                </div>
              </div>
              <div className="number">
                <label htmlFor="Voyageurs">Voyageurs</label>
                <input type="number" name="Voyageurs" />
              </div>
            </div>
            <button type="submit">Réserver</button>
          </form>
          <p className="debit">
            Aucun montant ne vous sera débité pour le moment
          </p>
          <Price>
            <span className="price-underline">1 400€ x 5 nuits</span>
            <span className="price-not-underline">8400 €</span>
          </Price>
          <Price>
            <span className="price-underline">Frais de service</span>
            <span className="price-not-underline">0 €</span>
          </Price>
          <Total>
            <span className="total">total</span>
            <span className="total-amount">7000 €</span>
          </Total>
        </Box>
      </SecondChild>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 600px;
  column-gap: 1rem;
`;

const FirstChild = styled.div`
  width: 60%;
  height: 100%;
  padding: 1rem 1rem 1rem 0;

  .title,
  .info,
  .description-1,
  .description-2 {
    margin: 1rem 0;
  }

  .description-1,
  .description-2 {
    font-weight: 300;
  }
`;

const SecondChild = styled.div`
  width: 40%;
  height: 100%;
`;

const Box = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin-top: 2rem;

  .title {
    font-weight: 300;
    span {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  form {
    .border {
      margin: 1rem 0;
      border: 1px solid #c9c9c9;
      overflow: hidden;
      border-radius: 10px;

      .layout {
        display: flex;

        div {
          width: 50%;
          padding: 5px 10px;
          border-bottom: 1px solid #c9c9c9;

          &:nth-child(1) {
            border-right: 1px solid #c9c9c9;
          }

          label {
            font-size: 0.8rem;
            font-weight: bold;
          }

          input {
            border: none;
          }
        }
      }

      .number {
        display: flex;
        flex-direction: column;
        padding: 5px 10px;

        label {
          font-size: 0.8rem;
          font-weight: bold;
        }
        input {
          margin-top: 5px;
        }
      }
    }

    button {
      width: 100%;
      background-color: rgb(0, 101, 252);
      padding: 7px 0;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 5px;
    }
  }

  .debit {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

const Price = styled.div`
  display: flex;
`;

const Total = styled.div``;

export default Info;
