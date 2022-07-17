import styled from 'styled-components';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';


const BusinessCardMedia = styled(CardMedia)`
    height: 194px;
    border-radius: 6px 6px 0 0;
`;

const PriceBox = styled(Box)`
    color: white;
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
}`;

const BusinessCardContent = styled(CardContent)`
    &&& {
        padding: 0;
        border-radius: 0;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #004ECE;
    }
`;

const PriceLevelText = styled(Typography)`
    &&& {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
    }
`;

const PriceLevelLabelText = styled(Typography)`
    &&& {
        color: white;
        font-size: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const AddressAndRatingBox = styled(Box)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 18px 12px;
    }
`;

const RatingBox = styled(Box)`
    &&& {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        border-radius: 4px;
        color: white;
        &.good-rating {
            background-color: #92C83E;
        }
        &.medium-rating {
            background-color: #ea742b;
        }
        &.bad-rating {
            background-color: #EA5455;
        }
    }
`;

const MainAddressText = styled(Typography)`
    &&& {
        font-size: 14px;
        font-weight: 500;
        color: #5E5873;
    }
`;

const SubAddressText = styled(Typography)`
    &&& {
        font-size: 12px;
        font-weight: 400;
        color: #6E6B7B;
    }
`;

const BusinessCardActions = styled(CardActions)`
    &&& {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const CategoryText = styled(Typography)`
    &&& {
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        border: 1px solid #0D59D6;
        border-radius: 5px;
        padding: 3.5px 16px;
        max-height: 31px;
        height: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const BusinessNameBox = styled(Box)`
    &&& {
        padding: 10px;
        position: absolute;
        top: 0;
        background: white;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const FavoriteButtonBox = styled(Box)`
    &&& {
        padding-right: 15px;
    }
`;


export {
    PriceBox,
    BusinessCardContent,
    BusinessCardMedia,
    PriceLevelText,
    PriceLevelLabelText,
    AddressAndRatingBox,
    RatingBox,
    MainAddressText,
    SubAddressText,
    BusinessCardActions,
    CategoryText,
    BusinessNameBox,
    FavoriteButtonBox,
};
