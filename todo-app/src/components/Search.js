import React, { useState } from 'react'
import style from './search.module.css'



const Search = (props) => {

    const { todos } = props;
    console.log(todos);

    // the value of the search field 
    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(todos);

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = todos.filter((todo) => {
                return todo.title?.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(todos);
            // If the text field is empty, show all users
        }
        setName(keyword);
    }

    return (
        <div>

            <h3>Search</h3>
            <div className={style['form-field']}>
                <input type="text" name='title' placeholder='Search' value={name} onChange={filter} />
            </div>


            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((todo) => (
                        <li className="user">
                            <span className="user-id">{todo?.title}</span>
                            <span className="user-name">{todo?.desc}</span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    )
}
export default Search;