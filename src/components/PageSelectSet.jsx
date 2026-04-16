import { BtnSet } from './BtnSet';
import cards from "../data.json";

export function PageSelectSet() {
    const setNames = [...new Set(cards.map(c => c.setName))];

    return ( 
        <div>
            <h2>Выберите набор</h2>
            {setNames.map((name, index) => (
                <BtnSet key={index} name={name} id={index} />
            ))}
        </div>
    );
}