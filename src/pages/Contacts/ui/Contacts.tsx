import React, { FC, useState } from 'react'
import styles from './Contacts.module.scss'
import Image from 'next/image';

import { SendMessage } from '../../../features/sendMessage/ui/SendMessage';
import { CompanyInfo } from '../../../entities/CompanyInfo/ui/CompanyInfo';
import { socialsList } from '../model';



export const Contacts: FC = () => 
    <main className={styles.contacts}>
            <CompanyInfo />
            <SendMessage/>
            <aside className={styles.contacts__socials}>
                <ul className={styles.socials__list}>
                    {socialsList.map((item, index) => 
                        <li key={index} className={styles.socials__item}>
                            <Image src={`/../../images/svg/socials/${item}`} alt={item} width={20} height={20} />
                        </li>)}
                </ul>
            </aside>
    </main>
