import SearchForm from './components/SearchForm';
import { useBusinessesContext } from 'hooks';
import Grid from '@mui/material/Grid';
import Business from '../components/Business';

export default function Search() {
    const { businesses } = useBusinessesContext();
    return (
        <>
            <SearchForm />
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {businesses.map(business => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={business.id}>
                        <Business business={business}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
