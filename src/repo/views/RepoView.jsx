import React,{useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../actions/index';
import RepoCard from './RepoCard';
import './repo.scss';
export default function RepoView({ Data }) {
    const dispatch = useDispatch();

    const user = ['JakeWharton', 'Alamofire', 'SonarTech'];
    const [keyWord, setKeyWord] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const handleNamechange = (e) => {
        dispatch(allActions.userActions.setUser(e.target.value));
    };
    const handleChange = ({ target }) => {
        setKeyWord(target.value);
        
      };
console.log({keyWord})
useEffect(() => {
    let filteredData;
    if (!keyWord) filteredData = Data;
    else
      filteredData = Data.filter((item) => {
        const values = Object.values(item);
        const find = values.find((val) => {
          if (!val) return false;
          const value = val.toString().toLowerCase();
          return value.includes(keyWord.toLowerCase());
        });
        return find;
      });
    setSearchResults(filteredData);
  }, [Data, keyWord]);
    return (
        <div>
            <div class=' form-select'>
                <label for='user-select'>Sélectionner un utilisateur:</label>

                <select
                    class='select'
                    name='repo'
                    id='repo-name'
                    onChange={(e) => handleNamechange(e)}
                >
                    {user.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <input
            class='search'
                placeholder={"search"}
                value={keyWord}
                onChange={handleChange}
            />
            <div class="list">
                {searchResults.map((e) => (
                    <RepoCard key={e.id} repo={e} />
                ))}
            </div>

        </div>
    );
}
