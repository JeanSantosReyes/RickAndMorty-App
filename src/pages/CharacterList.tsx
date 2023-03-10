import { useEffect, useState } from "react"
import { getAllCharacter } from "../services/RickAndMortyService";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { API_Params, Info, Result as Character_Interface } from "../interfaces/RickAndMortyInterface";
import { Pagination } from "../components/Pagination";

export const CharacterList = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Array<Character_Interface>>([]);

  const [pageNumber, setPageNumber] = useState<number>(1)
  const [infoPage, setInfoPage] = useState<Info>({});

  useEffect(() => {
    retrieveCharacters();
    // eslint-disable-next-line
  }, [pageNumber])

  const getRequestParams = (page: number) => {
    let params: API_Params = {};

    if (page) {
      params['page'] = page;
    }

    return params;
  };

  const retrieveCharacters = () => {
    setLoading(true);
    setTimeout(() => {
      const params = getRequestParams(pageNumber);
      getAllCharacter(params)
        .then(({ data }) => {
          const { results, info } = data;
          setCharacters(results);
          setInfoPage(info);
        })
        .finally(() => setLoading(false))
    }, 500);
  }

  return (
    <>
      <h1 className="text-center my-3">Characters</h1>
      <div className="row">
        {
          loading
            ? <Loading />
            : characters.map((character) => (
              <Card
                key={character.id}
                character={character}
              />
            ))
        }
      </div>
      {
        !loading && <Pagination
          info={infoPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      }
    </>
  )
}
