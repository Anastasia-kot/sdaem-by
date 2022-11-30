import Image from 'next/image'
import { useState } from 'react'
import { InputBlock } from '../../shared/Input/Input'
import styles from './Contacts.module.scss'
import avatar from '../../assets/images/svg/avatar.svg'
import postal_envelope from '../../assets/images/svg/postal_envelope.svg'


export const Contacts = () => {


    const [isModal, setIsModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModal(true)
    }


    return (
        <main className={styles.Contacts}>

              <div className={isModal ? styles.ContactsModalWrapper : styles.ContactsModalWrapperHidden}>
                <div className={styles.ContactsModal}>
                    <h2>
                        Ваше письмо
                        отправлено!
                    </h2>
                    <p>
                        Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.
                    </p>
                    <button onClick={()=>setIsModal(false)}>
                        Закрыть окно
                    </button>

                </div>
            </div>


            <address className={styles.InfoBlock}>
                <h1>Контакты</h1>
                <p className={styles.Description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                <ul className={styles.ContactsList}>
                    <li className={styles.ContactsListItem}>
                        <div className={styles.SvgWrapper}>
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0069 2.61628C9.90811 0.941861 8.09415 0 6.05346 0C4.0302 0 2.21625 0.941861 1.08253 2.61628C-0.0511958 4.25581 -0.312824 6.34884 0.384851 8.18023C0.576711 8.6686 0.873223 9.17442 1.25694 9.62791L5.66973 14.8256C5.77439 14.9302 5.87904 15 6.03601 15C6.19299 15 6.29764 14.9302 6.40229 14.8256L10.8325 9.62791C11.2162 9.17442 11.5302 8.68605 11.7046 8.18023C12.4023 6.34884 12.1407 4.25581 11.0069 2.61628ZM6.05346 8.7907C4.55346 8.7907 3.31508 7.55233 3.31508 6.05233C3.31508 4.55233 4.55346 3.31395 6.05346 3.31395C7.55346 3.31395 8.79183 4.55233 8.79183 6.05233C8.79183 7.55233 7.5709 8.7907 6.05346 8.7907Z" fill="white" />
                            </svg>
                        </div>
                        <span> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23  </span>
                    </li>
                    <li className={styles.ContactsListItem}>
                        <div className={styles.SvgWrapper}>
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.22721 0L1.77265 0C0.831741 0 0.0681152 0.763626 0.0681152 1.70454L0.0681152 13.2955C0.0681152 14.2364 0.831741 15 1.77265 15H7.22721C8.16812 15 8.93175 14.2364 8.93175 13.2955V1.70454C8.93175 0.763626 8.16812 0 7.22721 0ZM4.49995 14.3182C3.93403 14.3182 3.47722 13.8614 3.47722 13.2955C3.47722 12.7295 3.93403 12.2727 4.49995 12.2727C5.06587 12.2727 5.52267 12.7295 5.52267 13.2955C5.52267 13.8614 5.06584 14.3182 4.49995 14.3182ZM7.56813 11.5909H1.43176V2.04546H7.56813V11.5909Z" fill="white" />
                            </svg>

                        </div>

                        <span><a href="tel:+375296214833"> +375 29 621-48-33   </a>    </span>

                        <ul className={styles.MessengersList}>
                            <li className={styles.SvgWrapper}>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.90987 0.969943C5.73504 0.985811 3.20717 1.17867 1.79311 2.47434C0.743387 3.51795 0.376596 5.05652 0.333875 6.96188C0.297257 8.85992 0.254536 12.4241 3.69053 13.3951V14.872C3.69053 14.872 3.66734 15.464 4.05794 15.5861C4.54007 15.7386 4.81471 15.2815 5.27244 14.7933L6.12686 13.829C8.47652 14.0243 10.2769 13.5733 10.4844 13.5062C10.9604 13.3536 13.6464 13.0112 14.0858 9.44642C14.5374 5.76569 13.8661 3.44655 12.6577 2.39683L12.6516 2.39561C12.2854 2.05994 10.8207 0.991914 7.54337 0.979708C7.54337 0.979708 7.30169 0.96445 6.90987 0.969943ZM6.95077 2.00562C7.28338 2.00379 7.48783 2.01783 7.48783 2.01783C10.2586 2.02393 11.5836 2.86005 11.8948 3.14079C12.914 4.01291 13.4377 6.10441 13.0544 9.17789C12.6882 12.1562 10.5094 12.3454 10.1066 12.4735C9.93575 12.5284 8.34897 12.919 6.35206 12.7909C6.35206 12.7909 4.86353 14.5858 4.3997 15.0496C4.32647 15.1289 4.24103 15.1534 4.1861 15.1411C4.10676 15.1228 4.08235 15.0252 4.08845 14.8909L4.10066 12.4381C1.18891 11.6325 1.35979 8.592 1.39031 7.00522C1.42693 5.41843 1.72597 4.11727 2.61091 3.23843C3.80527 2.1582 5.95231 2.01173 6.95015 2.00562H6.95077ZM7.17047 3.59241C7.14646 3.59233 7.12266 3.59699 7.10045 3.60612C7.07824 3.61526 7.05806 3.62869 7.04105 3.64564C7.02404 3.66259 7.01054 3.68274 7.00133 3.70492C6.99212 3.7271 6.98738 3.75087 6.98738 3.77489C6.98738 3.82345 7.00667 3.87002 7.04101 3.90435C7.07535 3.93869 7.12191 3.95798 7.17047 3.95798C7.6242 3.94932 8.07515 4.03062 8.49729 4.19717C8.91943 4.36372 9.3044 4.61223 9.62999 4.92836C10.2952 5.57528 10.6193 6.44191 10.6315 7.57707C10.6315 7.60111 10.6362 7.62492 10.6454 7.64714C10.6546 7.66935 10.6681 7.68953 10.6851 7.70653C10.7021 7.72354 10.7223 7.73702 10.7445 7.74622C10.7667 7.75542 10.7905 7.76016 10.8146 7.76016V7.75467C10.8631 7.75467 10.9097 7.73538 10.944 7.70104C10.9784 7.6667 10.9977 7.62014 10.9977 7.57158C11.0203 7.03774 10.9341 6.50487 10.7441 6.00544C10.5542 5.50601 10.2646 5.05046 9.89303 4.66654C9.16677 3.95859 8.2501 3.59241 7.16986 3.59241H7.17047ZM4.75734 4.01352C4.62755 3.99502 4.49532 4.02082 4.38201 4.08675H4.37468C4.12446 4.23323 3.89376 4.41632 3.67406 4.66044C3.50927 4.85573 3.41712 5.05042 3.39271 5.23961C3.37835 5.35057 3.38877 5.46334 3.42322 5.56979L3.43543 5.57589C3.62354 6.12891 3.869 6.66074 4.16779 7.16267C4.55509 7.86563 5.03094 8.51603 5.58369 9.09794L5.602 9.12235L5.62641 9.14066L5.64472 9.15897L5.66303 9.17728C6.24722 9.73143 6.89935 10.2092 7.60379 10.5993C8.40939 11.0387 8.89885 11.2462 9.19179 11.3316V11.3377C9.27724 11.3622 9.35535 11.3744 9.43469 11.3744C9.68475 11.3561 9.9215 11.2547 10.1072 11.0863C10.3453 10.8727 10.5345 10.6359 10.6748 10.3857V10.3796C10.8152 10.1171 10.7664 9.86631 10.565 9.69543C10.1591 9.34035 9.71963 9.02558 9.25282 8.75556C8.94157 8.58468 8.62421 8.68843 8.49605 8.85931L8.22141 9.20658C8.08104 9.37746 7.82472 9.35305 7.82472 9.35305L7.81739 9.35915C5.91325 8.87091 5.4067 6.94297 5.4067 6.94297C5.4067 6.94297 5.38229 6.68054 5.55928 6.54627L5.90105 6.27163C6.06583 6.13737 6.18179 5.82001 6.0048 5.50876C5.73514 5.04171 5.42034 4.60223 5.06493 4.19661C4.98762 4.10073 4.87848 4.03576 4.75734 4.01352ZM7.48722 4.55669C7.43866 4.55685 7.39216 4.57629 7.35793 4.61074C7.32371 4.64519 7.30458 4.69183 7.30474 4.74039C7.3049 4.78895 7.32435 4.83545 7.3588 4.86967C7.39325 4.90389 7.43988 4.92303 7.48844 4.92287C8.0992 4.93347 8.68082 5.18587 9.10574 5.62471C9.29745 5.83619 9.44482 6.08395 9.53916 6.35334C9.63351 6.62274 9.6729 6.90831 9.65501 7.19319C9.65517 7.24164 9.67453 7.28806 9.70885 7.32226C9.74317 7.35646 9.78965 7.37567 9.8381 7.37567L9.8442 7.38299C9.8683 7.38299 9.89216 7.37824 9.91441 7.369C9.93667 7.35976 9.95688 7.34622 9.97389 7.32915C9.9909 7.31209 10.0044 7.29183 10.0135 7.26955C10.0227 7.24726 10.0274 7.22339 10.0273 7.19929C10.0456 6.47303 9.81979 5.86273 9.37427 5.37449C8.92875 4.88625 8.30624 4.61161 7.51285 4.55669C7.50432 4.55609 7.49575 4.55609 7.48722 4.55669ZM7.78627 5.54476C7.76178 5.54404 7.7374 5.54815 7.7145 5.55686C7.6916 5.56556 7.67064 5.57869 7.65282 5.59549C7.635 5.61229 7.62066 5.63244 7.61062 5.65479C7.60059 5.67713 7.59505 5.70123 7.59433 5.72572C7.59361 5.7502 7.59771 5.77459 7.60642 5.79749C7.61512 5.82038 7.62825 5.84134 7.64505 5.85917C7.66186 5.87699 7.68201 5.89133 7.70435 5.90136C7.7267 5.9114 7.7508 5.91694 7.77528 5.91766C8.37948 5.94817 8.67243 6.25332 8.70904 6.88194C8.71063 6.92943 8.73061 6.97445 8.76478 7.00747C8.79895 7.0405 8.84461 7.05895 8.89213 7.05892H8.89824C8.92283 7.05816 8.94701 7.05245 8.96934 7.04213C8.99167 7.03181 9.0117 7.0171 9.02822 6.99887C9.04473 6.98064 9.05741 6.95927 9.06549 6.93603C9.07357 6.9128 9.07688 6.88817 9.07522 6.86363C9.0325 6.04582 8.58698 5.58749 7.79359 5.54476C7.79115 5.54472 7.78871 5.54472 7.78627 5.54476Z" fill="white" />
                                </svg>

                            </li>
                            <li className={styles.SvgWrapper}><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0172 0.246571L0.704696 4.99449C-0.135581 5.33199 -0.13072 5.80074 0.55053 6.00977L3.71164 6.99588L11.0255 2.38129C11.3714 2.17088 11.6873 2.28407 11.4276 2.51463L5.50192 7.86255H5.50053L5.50192 7.86324L5.28386 11.1216C5.60331 11.1216 5.74428 10.975 5.92345 10.8021L7.45886 9.30907L10.6526 11.6681C11.2415 11.9924 11.6644 11.8257 11.8109 11.123L13.9075 1.2424C14.1221 0.381988 13.579 -0.00759572 13.0172 0.246571Z" fill="white" />
                            </svg>
                            </li>
                            <li className={styles.SvgWrapper}><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0557 2.98872C11.4072 2.3355 10.6354 1.81763 9.78508 1.46518C8.93479 1.11272 8.02295 0.932705 7.10251 0.935581C3.24438 0.935581 0.104181 4.07578 0.104181 7.93656C0.104181 9.17021 0.427385 10.3765 1.03935 11.4362L0.0458984 15.0647L3.75744 14.0907C4.78353 14.6496 5.93319 14.9429 7.10163 14.9437H7.10428C10.9624 14.9437 14.1053 11.8035 14.1053 7.94274C14.1076 7.02262 13.9276 6.11115 13.5757 5.26099C13.2237 4.41083 12.7068 3.63883 12.0548 2.9896L12.0557 2.98872ZM7.10428 13.7622C6.06151 13.7624 5.03789 13.482 4.1407 12.9506L3.92788 12.8235L1.7255 13.4001L2.31362 11.2534L2.17586 11.0326C1.59106 10.1061 1.28201 9.03222 1.28485 7.93656C1.28672 6.39303 1.90089 4.9133 2.99258 3.82211C4.08427 2.73091 5.56428 2.11741 7.10781 2.11625C8.66113 2.11625 10.1244 2.7238 11.222 3.82145C11.7637 4.36117 12.1931 5.00289 12.4853 5.70951C12.7775 6.41613 12.9268 7.17366 12.9246 7.93833C12.9219 11.1501 10.3116 13.7613 7.10428 13.7613V13.7622ZM10.2948 9.40246C10.1208 9.31415 9.25985 8.89204 9.10002 8.83376C8.94018 8.77548 8.82362 8.74545 8.70529 8.92206C8.5896 9.09603 8.25315 9.49076 8.15072 9.60909C8.04828 9.72478 7.94673 9.74155 7.77276 9.65325C7.5988 9.56494 7.03275 9.38038 6.36515 8.78431C5.8459 8.32069 5.49356 7.7467 5.39112 7.57273C5.28869 7.39877 5.37964 7.30252 5.46883 7.21686C5.54919 7.13915 5.6428 7.01287 5.73111 6.91043C5.81941 6.808 5.84679 6.73647 5.90507 6.61814C5.96335 6.50245 5.93509 6.40002 5.89094 6.31171C5.84679 6.2234 5.49621 5.36241 5.35315 5.01183C5.21274 4.6692 5.06615 4.71689 4.95842 4.71071C4.85598 4.70541 4.7403 4.70541 4.62462 4.70541C4.50894 4.70541 4.31819 4.74956 4.15836 4.92352C3.99852 5.09749 3.54551 5.52225 3.54551 6.38324C3.54551 7.24423 4.1716 8.0752 4.25991 8.19353C4.34822 8.30921 5.49356 10.078 7.24822 10.8348C7.66503 11.0141 7.99088 11.1218 8.24432 11.2048C8.66378 11.3373 9.04438 11.3178 9.34551 11.2737C9.68196 11.2242 10.3805 10.8516 10.5271 10.4427C10.6736 10.0338 10.6736 9.68415 10.6295 9.61174C10.588 9.53403 10.4723 9.49076 10.2957 9.40157L10.2948 9.40246Z" fill="white" />
                            </svg>
                            </li>
                        </ul>


                    </li>
                    <li className={styles.ContactsListItem}>
                        <div className={styles.SvgWrapper}>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6603 12.3928C13.9975 12.3928 14.2896 12.2814 14.538 12.0616L10.2883 7.81169C10.1863 7.8847 10.0875 7.9557 9.99411 8.02321C9.67608 8.25753 9.41796 8.44037 9.21976 8.57139C9.02158 8.70271 8.75791 8.83656 8.42877 8.97322C8.09941 9.11004 7.79257 9.17823 7.50792 9.17823H7.49959H7.49126C7.20659 9.17823 6.89975 9.11007 6.57042 8.97322C6.24108 8.83656 5.97741 8.70271 5.77942 8.57139C5.58124 8.44037 5.32326 8.25756 5.00507 8.02321C4.9164 7.95821 4.81806 7.88688 4.71174 7.81055L0.461182 12.0616C0.709523 12.2814 1.00187 12.3928 1.33902 12.3928H13.6603Z" fill="white" />
                                <path d="M0.845514 5.13653C0.52751 4.92452 0.245509 4.68171 0 4.4082V10.8741L3.7457 7.12838C2.99635 6.60523 2.03085 5.94204 0.845514 5.13653Z" fill="white" />
                                <path d="M14.1632 5.13653C13.0231 5.90822 12.0541 6.57255 11.2561 7.12988L15.0003 10.8742V4.4082C14.7602 4.67621 14.4812 4.91886 14.1632 5.13653Z" fill="white" />
                                <path d="M13.6607 0.607422H1.33944C0.909593 0.607422 0.579117 0.752576 0.347606 1.04258C0.115904 1.33273 0.000244141 1.69559 0.000244141 2.13075C0.000244141 2.48225 0.153731 2.86311 0.46057 3.27343C0.767408 3.68359 1.09391 4.00576 1.43991 4.24011C1.62959 4.37412 2.2016 4.77178 3.15594 5.43296C3.67111 5.78996 4.11913 6.10113 4.50413 6.36965C4.83229 6.5983 5.1153 6.79631 5.34896 6.96064C5.37578 6.97946 5.41797 7.00963 5.47396 7.04966C5.53428 7.09299 5.61062 7.14798 5.70479 7.21598C5.88614 7.34713 6.03679 7.45315 6.15678 7.53415C6.27661 7.61516 6.42179 7.70566 6.59211 7.80615C6.76229 7.90651 6.9228 7.98197 7.07346 8.03216C7.22414 8.08233 7.36363 8.10749 7.49195 8.10749H7.50029H7.50862C7.63691 8.10749 7.77643 8.08233 7.92714 8.03216C8.07777 7.98197 8.23815 7.90667 8.40846 7.80615C8.57862 7.70566 8.72361 7.61497 8.84382 7.53415C8.96381 7.45315 9.11446 7.34716 9.29584 7.21598C9.38982 7.14798 9.46615 7.09297 9.52647 7.0498C9.58249 7.0096 9.62465 6.97962 9.65164 6.96064C9.83367 6.83398 10.1173 6.63678 10.4987 6.37196C11.1927 5.8898 12.2147 5.18012 13.569 4.24011C13.9764 3.9556 14.3167 3.61227 14.5902 3.2106C14.8632 2.80894 15.0001 2.38761 15.0001 1.94676C15.0001 1.57843 14.8674 1.26326 14.6025 1.00075C14.3374 0.738578 14.0234 0.607422 13.6607 0.607422Z" fill="white" />
                            </svg>
                        </div>


                        <span><a href="mailto:sdaem@sdaem.by">  sdaem @sdaem.by </a> </span>
                    </li>
                    <li className={styles.ContactsListItem}>
                        <div className={styles.SvgWrapper}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0C3.36443 0 0 3.36443 0 7.5C0 11.6356 3.36443 15 7.5 15C11.6356 15 15 11.6356 15 7.5C15 3.36443 11.6356 0 7.5 0ZM7.5 13.3607C4.26835 13.3607 1.63934 10.7317 1.63934 7.5C1.63934 4.26851 4.26835 1.63934 7.5 1.63934C10.7317 1.63934 13.3607 4.26851 13.3607 7.5C13.3607 10.7317 10.7317 13.3607 7.5 13.3607Z" fill="white" />
                                <path d="M8.14909 7.5093V4.36588C8.14909 4.01489 7.86467 3.73047 7.51382 3.73047C7.16286 3.73047 6.87842 4.01489 6.87842 4.36588V7.71229C6.87842 7.72228 6.88088 7.73166 6.88136 7.74165C6.87301 7.91443 6.93253 8.08985 7.06448 8.22183L9.43088 10.5881C9.67909 10.8363 10.0814 10.8363 10.3294 10.5881C10.5774 10.3399 10.5776 9.93757 10.3294 9.68953L8.14909 7.5093Z" fill="white" />
                            </svg>
                        </div>


                        <span> <span className={styles.thin}>Режим работы:</span> 08:00-22:00  </span>
                    </li>


                </ul>
                <p className={styles.EntrepreneurInfo}> ИП Шушкевич Андрей Викторович                 </p>
                <p className={styles.EntrepreneurInfo}> УНП 192602485 Минским горисполкомом 10.02.2016                 </p>
                <div className={styles.Alert}>
                    <div className={styles.SvgWrapper}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 0C7.875 0 0 7.875 0 17.5C0 27.125 7.875 35 17.5 35C27.125 35 35 27.125 35 17.5C35 7.875 27.125 0 17.5 0ZM17.5 3.5C19.425 3.5 20.825 5.075 20.65 7L19.25 21H15.75L15.05 14L14.35 7C14.175 5.075 15.575 3.5 17.5 3.5ZM17.5 31.5C15.575 31.5 14 29.925 14 28C14 26.075 15.575 24.5 17.5 24.5C19.425 24.5 21 26.075 21 28C21 29.925 19.425 31.5 17.5 31.5Z" fill="#5039BD" />
                        </svg>
                    </div>

                    <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
                </div>
            </address>
            <form className={styles.Form} onSubmit={e => handleSubmit(e)}>
                {/* props */}

                <InputBlock
                    type={'text'}
                    label={'Ваше имя'}
                    placeholder={'Алексей'}
                    flexDirection={'column'}
                    width={260}
                    height={50}
                    imageSrc={avatar} 
                />
                <InputBlock
                    type={'email'}
                    label={'Ваша электронная почта'}
                    placeholder={'Введите'}
                    flexDirection={'column'}
                    width={260}
                    height={50}
                    imageSrc={postal_envelope} 
                />
                <InputBlock
                    type={'textarea'}
                    label={'Ваше сообщение'}
                    placeholder={'Сообщение'}
                    flexDirection={'column'}
                    width={548}
                    height={200}
                />

                <button type='submit' onClick={() => setIsModal(true)}>Отправить</button>
            </form>


            <aside className={styles.SocialsBlock}>
                <ul>
                    <li className={styles.SvgWrapper}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99731 4.86894C7.15795 4.86894 4.86644 7.16045 4.86644 9.99982C4.86644 12.8392 7.15795 15.1307 9.99731 15.1307C12.8367 15.1307 15.1282 12.8392 15.1282 9.99982C15.1282 7.16045 12.8367 4.86894 9.99731 4.86894ZM9.99731 13.3345C8.16111 13.3345 6.66262 11.836 6.66262 9.99982C6.66262 8.16361 8.16111 6.66512 9.99731 6.66512C11.8335 6.66512 13.332 8.16361 13.332 9.99982C13.332 11.836 11.8335 13.3345 9.99731 13.3345ZM15.3383 3.46302C14.6754 3.46302 14.14 3.99837 14.14 4.66131C14.14 5.32424 14.6754 5.85959 15.3383 5.85959C16.0013 5.85959 16.5366 5.32674 16.5366 4.66131C16.5368 4.50389 16.5059 4.34798 16.4458 4.20251C16.3856 4.05704 16.2974 3.92486 16.1861 3.81355C16.0748 3.70224 15.9426 3.61398 15.7971 3.55383C15.6516 3.49368 15.4957 3.46282 15.3383 3.46302ZM19.9989 9.99982C19.9989 8.61891 20.0114 7.25051 19.9338 5.8721C19.8563 4.27105 19.4911 2.85012 18.3203 1.67935C17.147 0.506076 15.7286 0.143338 14.1275 0.0657868C12.7466 -0.0117642 11.3782 0.000744099 9.99981 0.000744099C8.61891 0.000744099 7.25051 -0.0117642 5.8721 0.0657868C4.27105 0.143338 2.85012 0.508578 1.67935 1.67935C0.506076 2.85262 0.143338 4.27105 0.0657868 5.8721C-0.0117642 7.25301 0.000744099 8.62141 0.000744099 9.99982C0.000744099 11.3782 -0.0117642 12.7491 0.0657868 14.1275C0.143338 15.7286 0.508578 17.1495 1.67935 18.3203C2.85262 19.4936 4.27105 19.8563 5.8721 19.9338C7.25301 20.0114 8.62141 19.9989 9.99981 19.9989C11.3807 19.9989 12.7491 20.0114 14.1275 19.9338C15.7286 19.8563 17.1495 19.4911 18.3203 18.3203C19.4936 17.147 19.8563 15.7286 19.9338 14.1275C20.0139 12.7491 19.9989 11.3807 19.9989 9.99982ZM17.7974 15.8987C17.6148 16.354 17.3947 16.6942 17.0419 17.0444C16.6892 17.3972 16.3515 17.6173 15.8962 17.7999C14.5803 18.3228 11.4558 18.2052 9.99731 18.2052C8.53885 18.2052 5.4118 18.3228 4.09593 17.8024C3.64064 17.6198 3.30041 17.3997 2.95018 17.0469C2.59745 16.6942 2.37731 16.3565 2.19469 15.9012C1.67434 14.5828 1.79192 11.4583 1.79192 9.99982C1.79192 8.54136 1.67434 5.4143 2.19469 4.09844C2.37731 3.64314 2.59745 3.30291 2.95018 2.95268C3.30291 2.60245 3.64064 2.37981 4.09593 2.19719C5.4118 1.67685 8.53885 1.79442 9.99731 1.79442C11.4558 1.79442 14.5828 1.67685 15.8987 2.19719C16.354 2.37981 16.6942 2.59995 17.0444 2.95268C17.3972 3.30542 17.6173 3.64314 17.7999 4.09844C18.3203 5.4143 18.2027 8.54136 18.2027 9.99982C18.2027 11.4583 18.3203 14.5828 17.7974 15.8987Z" fill="white" />
                        </svg>

                    </li>
                    <li className={styles.SvgWrapper}>
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5414 0.790064C19.6812 0.334258 19.5414 0 18.8807 0H16.6919C16.135 0 15.8805 0.289168 15.7407 0.606761C15.7407 0.606761 14.6279 3.272 13.0509 5.00014C12.5419 5.503 12.3093 5.66179 12.0319 5.66179C11.8931 5.66179 11.6915 5.503 11.6915 5.04719V0.790064C11.6915 0.243097 11.5308 0 11.0667 0H7.62734C7.28001 0 7.07041 0.252899 7.07041 0.494035C7.07041 1.01159 7.85889 1.13118 7.93974 2.58976V5.75393C7.93974 6.44696 7.81298 6.57341 7.53352 6.57341C6.79194 6.57341 4.98741 3.89836 3.91647 0.836134C3.70787 0.241136 3.49728 0.000980624 2.93835 0.000980624H0.750557C0.12476 0.000980624 0 0.290148 0 0.607741C0 1.17823 0.741575 4.00129 3.45436 7.73497C5.26288 10.2845 7.80899 11.6667 10.1285 11.6667C11.5189 11.6667 11.6905 11.3599 11.6905 10.8305V8.90341C11.6905 8.28978 11.8233 8.16628 12.2634 8.16628C12.5868 8.16628 13.1437 8.32703 14.4422 9.55526C15.9254 11.0119 16.1709 11.6657 17.0043 11.6657H19.1921C19.8169 11.6657 20.1293 11.3589 19.9497 10.7531C19.753 10.1503 19.0444 9.27295 18.1042 8.23489C17.5932 7.64283 16.8296 7.00569 16.5971 6.68711C16.2727 6.2764 16.3665 6.09505 16.5971 5.73041C16.5981 5.73139 19.264 2.04377 19.5414 0.790064Z" fill="white" />
                        </svg>

                    </li>
                    <li className={styles.SvgWrapper}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.47745 0 0 4.47745 0 10C0 14.9905 3.65637 19.1269 8.43784 19.88V12.8913H5.89759V10H8.43784V7.79678C8.43784 5.28853 9.93099 3.90539 12.2142 3.90539C13.3083 3.90539 14.4544 4.10041 14.4544 4.10041V6.55966H13.1903C11.9502 6.55966 11.5622 7.33173 11.5622 8.12281V9.998H14.3334L13.8904 12.8893H11.5622V19.878C16.3436 19.1289 20 14.9915 20 10C20 4.47745 15.5226 0 10 0Z" fill="white" />
                        </svg>

                    </li>
                </ul>

            </aside>


        </main>
    )
}
