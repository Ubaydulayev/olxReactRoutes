import PremiumAdsWrapper from "./PremiumAdsWrapper";
import React from 'react'
import Container from "../../containers/Container";

const PremiumAds = (props) => {
    const { category } = useParams();
    const data = datas[category];

    return (
        <Container>
            <PremiumAdsWrapper>
                <div className="row">
                    {data?.map(v =>
                        <div className="col-md-3 mb-3 ">
                            <Link to={`/${category}/${v.id}`} className="shadow rounded p-2 product h-100" >
                                <img src={v.img} className="w-100 mb-3 rounded" alt="" />
                                <p className="fw-bold">{v.title}</p>
                                <span>{v.price}</span><br /><span>{v.location}</span>
                            </Link>
                        </div>
                    )}
                </div>
            </PremiumAdsWrapper>
        </Container>
    )
}

export default PremiumAds
