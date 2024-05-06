'use client'
import { Provider } from 'react-redux';
import  store from '@src/libraries/store';

export default function StoreProvider({ children, }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}