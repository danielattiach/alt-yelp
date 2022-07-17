import { useState, useEffect } from 'react';
import { SEARCH_BUSINESSES_QUERY } from 'queries';
import { useLazyQuery } from '@apollo/client';
import { useBusinessesContext, useDebounce } from 'hooks';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchForm() {
    const { setBusinesses, limit, setLimit, location, setLocation, term, setTerm } = useBusinessesContext();
    const {
        term: debouncedTerm,
        location: debouncedLocation,
        limit: debouncedLimit,
    } = useDebounce(
        {
            term,
            location,
            limit,
        },
        400,
    );
    const [getBusinesses] = useLazyQuery(SEARCH_BUSINESSES_QUERY, {
        variables: {
            term: debouncedTerm,
            location: debouncedLocation,
            limit: debouncedLimit,
        },
    });

    const createChangeHandler = setter => event => {
        setter(event.target.value);
    };

    useEffect(() => {
        const fetchBusinesses = async () => {
            const res = await getBusinesses();
            setBusinesses(res.data.search.business);
        };
        if (debouncedLimit && debouncedTerm && debouncedLocation) {
            fetchBusinesses();
        }
    }, [debouncedLimit, debouncedLocation, debouncedTerm]);

    return (
        <Box my={2} autoComplete="off" display="flex" gap={2}>
            <TextField
                InputLabelProps={{ shrink: Boolean(term) }}
                label="Term"
                variant="outlined"
                value={term}
                onChange={createChangeHandler(setTerm)}
            />
            <TextField
                InputLabelProps={{ shrink: Boolean(location) }}
                label="Location"
                variant="outlined"
                value={location}
                onChange={createChangeHandler(setLocation)}
            />
            <TextField
                InputLabelProps={{ shrink: Boolean(limit) }}
                type="number"
                variant="outlined"
                value={limit}
                onChange={createChangeHandler(setLimit)}
            />
        </Box>
    );
}
