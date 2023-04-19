import { Card } from "./Types";

type Props = {
    card: Card,
    break?: boolean
}

export const CardComponent = (props: Props) => {

    return <>
        <div className="card-wrapper">
            <div className="card">
                <div className="type">
                    {props.card.type}
                </div>
                <div className="title">
                    {props.card.title}
                </div>
                <div className="description">
                    {props.card.description}
                </div>
            </div>
        </div>
    </>;
}