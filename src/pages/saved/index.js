import Grid from '@mui/material/Grid';
import Business from '../components/Business';
import { useQuery } from '@apollo/client';
import { useBusinessesContext } from 'hooks';
import { buildGetBusinessesFromIDsQuery } from 'queries';

const SavedBusinesses = () => {
    const { favoriteBusinessIDs } = useBusinessesContext();
    const query = buildGetBusinessesFromIDsQuery(favoriteBusinessIDs)
    const { loading, error, data } = useQuery(query)
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.message}</h1>

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ marginTop: 20 }}>
            {Object.values(data).map(business => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={business.id}>
                    <Business business={business}/>
                </Grid>
            ))}
        </Grid>
    )
}

const EmptySavedBusinesses = () => {
    return (
        <h1>EMPTY</h1>
    )
}

export default function Saved() {
    const { favoriteBusinessIDs } = useBusinessesContext();
    if (!favoriteBusinessIDs.length) {
        return <EmptySavedBusinesses />
    }

    return <SavedBusinesses />
}
