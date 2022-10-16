export const Languages = ({languages}) => {

    let data= languages[0][0];
    let arr =[];
    for (let lan in data){ arr.push(data[lan]) }

    return( arr.map( (languague, index) => <li key={index}> {languague} </li>))
}