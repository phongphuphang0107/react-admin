/* eslint react/jsx-key: off */
import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

const UserEditEmbedded = ({ permissions, ...props }) => (
    /* Passing " " as title disables the custom title */
    <Edit title=" " {...props}>
        <SimpleForm
            defaultValue={{ role: 'user' }}
            /* The form must have a name dependent on the record, because by default all forms have the same name */
            form={`user_edit_${props.id}`}
        >
            <TextInput
                source="name"
                defaultValue="slim shady"
                validate={required()}
            />
        </SimpleForm>
    </Edit>
);

UserEditEmbedded.propTypes = Edit.propTypes;

export default UserEditEmbedded;
