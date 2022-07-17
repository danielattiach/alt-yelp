import { useContext } from 'react';
import { businessContext } from '../context/businessContext';

export default function useBusinessContext() {
    return useContext(businessContext);
}
