import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (<ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={440}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="125" r="100"/>
            <rect x="0" y="319" rx="6" ry="6" width="260" height="56"/>
            <rect x="0" y="388" rx="6" ry="6" width="98" height="47"/>
            <rect x="121" y="389" rx="30" ry="30" width="155" height="46"/>
            <rect x="0" y="286" rx="0" ry="0" width="274" height="21"/>
        </ContentLoader>
    )

}

export default  PizzaLoadingBlock;