import Button from '@src/components/Button';
import CardComponent from '@src/components/CardComponent';
import { TenantContext } from '@src/contexts/TenantContext';
import { Field, Form, Formik } from 'formik';
import { ReactNode, useContext, useEffect, useState } from 'react';

type FormikValues = {
    adminKey: string;
};
/**
 * KeyTrap component used to ask and check if the user has the admin key to access the site
 */
export default function KeyTrap(): ReactNode {
    const { setAdminKey } = useContext(TenantContext);
    const [previousKey, setPreviousKey] = useState('');

    const localStorageAdminKey = localStorage.getItem('admin-key');

    const handleSubmit = (values: FormikValues) => {
        setAdminKey(values.adminKey);
    };

    // Check if localStorageAdminKey exists and set it to keyState, then remove localStorage to prevent persisting the key
    useEffect(() => {
        if (localStorageAdminKey) {
            setPreviousKey(localStorageAdminKey);
            localStorage.removeItem('admin-key');
        }
    }, [localStorageAdminKey]);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <CardComponent>
                {previousKey && <p>La clau introduida és incorrecta</p>}
                <Formik initialValues={{ adminKey: '' }} onSubmit={handleSubmit}>
                    <Form>
                        <div className='flex flex-col gap-2'>
                            <p>Introduir clau d'accés</p>
                            <Field className='border' type="text" name='adminKey' />
                            <Button type='submit'>Accedir</Button>
                        </div>
                    </Form>
                </Formik>
            </CardComponent>
        </div>
    );
};