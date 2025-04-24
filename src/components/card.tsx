import React from "react";
interface cardprops{
    icon:string;
    title:string;
    description:string;
}

const Card: React.FC <cardprops> = ({icon, title, description})=> {
    return (
    <section className="even-columns">
    <div className="card">
        <span>
            <img src={icon} alt={`icone ${title}`} width={128} height={64} />
        </span>
        <div>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <hr />
        </div>
    </div>
</section>
    );
};
export default Card;