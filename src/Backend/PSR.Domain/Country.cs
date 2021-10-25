using System;
using System.Collections.Generic;
using System.Linq;
using PSR.SharedKernel;

namespace PSR.Domain
{
    public class Country : Enumeration
    {
        public static Country Empty = new Country(0, nameof(Empty).ToLowerInvariant()); 
        public static Country Andorra = new Country(1, nameof(Andorra).ToLowerInvariant()); 
        public static Country UnitedArabEmirates = new Country(2, nameof(UnitedArabEmirates).ToLowerInvariant()); 
        public static Country Afghanistan = new Country(3, nameof(Afghanistan).ToLowerInvariant()); 
        public static Country AntiguaAndBarbuda = new Country(4, nameof(AntiguaAndBarbuda).ToLowerInvariant()); 
        public static Country Anguilla = new Country(5, nameof(Anguilla).ToLowerInvariant()); 
        public static Country Albania = new Country(6, nameof(Albania).ToLowerInvariant()); 
        public static Country Armenia = new Country(7, nameof(Armenia).ToLowerInvariant()); 
        public static Country NetherlandsAntilles = new Country(8, nameof(NetherlandsAntilles).ToLowerInvariant()); 
        public static Country Angola = new Country(9, nameof(Angola).ToLowerInvariant()); 
        public static Country Antarctica = new Country(10, nameof(Antarctica).ToLowerInvariant()); 
        public static Country Argentina = new Country(11, nameof(Argentina).ToLowerInvariant()); 
        public static Country Austria = new Country(12, nameof(Austria).ToLowerInvariant()); 
        public static Country Australia = new Country(13, nameof(Australia).ToLowerInvariant()); 
        public static Country Aruba = new Country(14, nameof(Aruba).ToLowerInvariant()); 
        public static Country Azerbaijan = new Country(15, nameof(Azerbaijan).ToLowerInvariant()); 
        public static Country BosniaAndHerzegovina = new Country(16, nameof(BosniaAndHerzegovina).ToLowerInvariant()); 
        public static Country Barbados = new Country(17, nameof(Barbados).ToLowerInvariant()); 
        public static Country Bangladesh = new Country(18, nameof(Bangladesh).ToLowerInvariant()); 
        public static Country Belgium = new Country(19, nameof(Belgium).ToLowerInvariant()); 
        public static Country BurkinaFaso = new Country(20, nameof(BurkinaFaso).ToLowerInvariant()); 
        public static Country Bulgaria = new Country(21, nameof(Bulgaria).ToLowerInvariant()); 
        public static Country Bahrain = new Country(22, nameof(Bahrain).ToLowerInvariant()); 
        public static Country Burundi = new Country(23, nameof(Burundi).ToLowerInvariant()); 
        public static Country Benin = new Country(24, nameof(Benin).ToLowerInvariant()); 
        public static Country Bermuda = new Country(25, nameof(Bermuda).ToLowerInvariant()); 
        public static Country BruneiDarussalam = new Country(26, nameof(BruneiDarussalam).ToLowerInvariant()); 
        public static Country Bolivia = new Country(27, nameof(Bolivia).ToLowerInvariant()); 
        public static Country Brazil = new Country(28, nameof(Brazil).ToLowerInvariant()); 
        public static Country Bahamas = new Country(29, nameof(Bahamas).ToLowerInvariant()); 
        public static Country Bhutan = new Country(30, nameof(Bhutan).ToLowerInvariant()); 
        public static Country BouvetIsland = new Country(31, nameof(BouvetIsland).ToLowerInvariant()); 
        public static Country Botswana = new Country(32, nameof(Botswana).ToLowerInvariant()); 
        public static Country Belarus = new Country(33, nameof(Belarus).ToLowerInvariant()); 
        public static Country Belize = new Country(34, nameof(Belize).ToLowerInvariant()); 
        public static Country Canada = new Country(35, nameof(Canada).ToLowerInvariant()); 
        public static Country CocosKeelingIslands = new Country(36, nameof(CocosKeelingIslands).ToLowerInvariant()); 
        public static Country CentralAfricanRepublic = new Country(37, nameof(CentralAfricanRepublic).ToLowerInvariant()); 
        public static Country Congo = new Country(38, nameof(Congo).ToLowerInvariant()); 
        public static Country Switzerland = new Country(39, nameof(Switzerland).ToLowerInvariant()); 
        public static Country IvoryCoast = new Country(40, nameof(IvoryCoast).ToLowerInvariant()); 
        public static Country CookIslands = new Country(41, nameof(CookIslands).ToLowerInvariant()); 
        public static Country Chile = new Country(42, nameof(Chile).ToLowerInvariant()); 
        public static Country Cameroon = new Country(43, nameof(Cameroon).ToLowerInvariant()); 
        public static Country China = new Country(44, nameof(China).ToLowerInvariant()); 
        public static Country Colombia = new Country(45, nameof(Colombia).ToLowerInvariant()); 
        public static Country CostaRica = new Country(46, nameof(CostaRica).ToLowerInvariant()); 
        public static Country Cuba = new Country(47, nameof(Cuba).ToLowerInvariant()); 
        public static Country CapeVerde = new Country(48, nameof(CapeVerde).ToLowerInvariant()); 
        public static Country ChristmasIsland = new Country(49, nameof(ChristmasIsland).ToLowerInvariant()); 
        public static Country Cyprus = new Country(50, nameof(Cyprus).ToLowerInvariant()); 
        public static Country CzechRepublic = new Country(51, nameof(CzechRepublic).ToLowerInvariant()); 
        public static Country Germany = new Country(52, nameof(Germany).ToLowerInvariant()); 
        public static Country Djibouti = new Country(53, nameof(Djibouti).ToLowerInvariant()); 
        public static Country Denmark = new Country(54, nameof(Denmark).ToLowerInvariant()); 
        public static Country Dominica = new Country(55, nameof(Dominica).ToLowerInvariant()); 
        public static Country DominicanRepublic = new Country(56, nameof(DominicanRepublic).ToLowerInvariant()); 
        public static Country AmericanSamoa = new Country(57, nameof(AmericanSamoa).ToLowerInvariant()); 
        public static Country Algeria = new Country(58, nameof(Algeria).ToLowerInvariant()); 
        public static Country Ecuador = new Country(59, nameof(Ecuador).ToLowerInvariant()); 
        public static Country Estonia = new Country(60, nameof(Estonia).ToLowerInvariant()); 
        public static Country Egypt = new Country(61, nameof(Egypt).ToLowerInvariant()); 
        public static Country WesternSahara = new Country(62, nameof(WesternSahara).ToLowerInvariant()); 
        public static Country Eritrea = new Country(63, nameof(Eritrea).ToLowerInvariant()); 
        public static Country Spain = new Country(64, nameof(Spain).ToLowerInvariant()); 
        public static Country Ethiopia = new Country(65, nameof(Ethiopia).ToLowerInvariant()); 
        public static Country Finland = new Country(66, nameof(Finland).ToLowerInvariant()); 
        public static Country Fiji = new Country(67, nameof(Fiji).ToLowerInvariant()); 
        public static Country FalklandIslandsMalvinas = new Country(68, nameof(FalklandIslandsMalvinas).ToLowerInvariant()); 
        public static Country MicronesiaFederatedStatesOf = new Country(69, nameof(MicronesiaFederatedStatesOf).ToLowerInvariant()); 
        public static Country FaroeIslands = new Country(70, nameof(FaroeIslands).ToLowerInvariant()); 
        public static Country France = new Country(71, nameof(France).ToLowerInvariant()); 
        public static Country FranceMetropolitan = new Country(72, nameof(FranceMetropolitan).ToLowerInvariant()); 
        public static Country Gabon = new Country(73, nameof(Gabon).ToLowerInvariant()); 
        public static Country UnitedKingdom = new Country(74, nameof(UnitedKingdom).ToLowerInvariant()); 
        public static Country Grenada = new Country(75, nameof(Grenada).ToLowerInvariant()); 
        public static Country Georgia = new Country(76, nameof(Georgia).ToLowerInvariant()); 
        public static Country FrenchGuiana = new Country(77, nameof(FrenchGuiana).ToLowerInvariant()); 
        public static Country Ghana = new Country(78, nameof(Ghana).ToLowerInvariant()); 
        public static Country Gibraltar = new Country(79, nameof(Gibraltar).ToLowerInvariant()); 
        public static Country Guernsey = new Country(80, nameof(Guernsey).ToLowerInvariant()); 
        public static Country Greenland = new Country(81, nameof(Greenland).ToLowerInvariant()); 
        public static Country Gambia = new Country(82, nameof(Gambia).ToLowerInvariant()); 
        public static Country Guinea = new Country(83, nameof(Guinea).ToLowerInvariant()); 
        public static Country Guadeloupe = new Country(84, nameof(Guadeloupe).ToLowerInvariant()); 
        public static Country EquatorialGuinea = new Country(85, nameof(EquatorialGuinea).ToLowerInvariant()); 
        public static Country Greece = new Country(86, nameof(Greece).ToLowerInvariant()); 
        public static Country SouthGeorgiaSouthSandwichIslands = new Country(87, nameof(SouthGeorgiaSouthSandwichIslands).ToLowerInvariant()); 
        public static Country Guatemala = new Country(88, nameof(Guatemala).ToLowerInvariant()); 
        public static Country Guam = new Country(89, nameof(Guam).ToLowerInvariant()); 
        public static Country GuineaBissau = new Country(90, nameof(GuineaBissau).ToLowerInvariant()); 
        public static Country Guyana = new Country(91, nameof(Guyana).ToLowerInvariant()); 
        public static Country HongKong = new Country(92, nameof(HongKong).ToLowerInvariant()); 
        public static Country HeardAndMcDonaldIslands = new Country(93, nameof(HeardAndMcDonaldIslands).ToLowerInvariant()); 
        public static Country Honduras = new Country(94, nameof(Honduras).ToLowerInvariant()); 
        public static Country CroatiaHrvatska = new Country(95, nameof(CroatiaHrvatska).ToLowerInvariant()); 
        public static Country Haiti = new Country(96, nameof(Haiti).ToLowerInvariant()); 
        public static Country Hungary = new Country(97, nameof(Hungary).ToLowerInvariant()); 
        public static Country Indonesia = new Country(98, nameof(Indonesia).ToLowerInvariant()); 
        public static Country Ireland = new Country(99, nameof(Ireland).ToLowerInvariant()); 
        public static Country Israel = new Country(100, nameof(Israel).ToLowerInvariant()); 
        public static Country IsleOfMan = new Country(101, nameof(IsleOfMan).ToLowerInvariant()); 
        public static Country India = new Country(102, nameof(India).ToLowerInvariant()); 
        public static Country BritishIndianOceanTerritory = new Country(103, nameof(BritishIndianOceanTerritory).ToLowerInvariant()); 
        public static Country Iraq = new Country(104, nameof(Iraq).ToLowerInvariant()); 
        public static Country IranIslamicRepublicOf = new Country(105, nameof(IranIslamicRepublicOf).ToLowerInvariant()); 
        public static Country Iceland = new Country(106, nameof(Iceland).ToLowerInvariant()); 
        public static Country Italy = new Country(107, nameof(Italy).ToLowerInvariant()); 
        public static Country Jersey = new Country(108, nameof(Jersey).ToLowerInvariant()); 
        public static Country Jamaica = new Country(109, nameof(Jamaica).ToLowerInvariant()); 
        public static Country Jordan = new Country(110, nameof(Jordan).ToLowerInvariant()); 
        public static Country Japan = new Country(111, nameof(Japan).ToLowerInvariant()); 
        public static Country Kenya = new Country(112, nameof(Kenya).ToLowerInvariant()); 
        public static Country Kyrgyzstan = new Country(113, nameof(Kyrgyzstan).ToLowerInvariant()); 
        public static Country Cambodia = new Country(114, nameof(Cambodia).ToLowerInvariant()); 
        public static Country Kiribati = new Country(115, nameof(Kiribati).ToLowerInvariant()); 
        public static Country Comoros = new Country(116, nameof(Comoros).ToLowerInvariant()); 
        public static Country SaintKittsAndNevis = new Country(117, nameof(SaintKittsAndNevis).ToLowerInvariant()); 
        public static Country KoreaDemocraticPeoplesRepublicOf = new Country(118, nameof(KoreaDemocraticPeoplesRepublicOf).ToLowerInvariant()); 
        public static Country KoreaRepublicOf = new Country(119, nameof(KoreaRepublicOf).ToLowerInvariant()); 
        public static Country Kuwait = new Country(120, nameof(Kuwait).ToLowerInvariant()); 
        public static Country CaymanIslands = new Country(121, nameof(CaymanIslands).ToLowerInvariant()); 
        public static Country Kazakhstan = new Country(122, nameof(Kazakhstan).ToLowerInvariant()); 
        public static Country LaoPeoplesDemocraticRepublic = new Country(123, nameof(LaoPeoplesDemocraticRepublic).ToLowerInvariant()); 
        public static Country Lebanon = new Country(124, nameof(Lebanon).ToLowerInvariant()); 
        public static Country SaintLucia = new Country(125, nameof(SaintLucia).ToLowerInvariant()); 
        public static Country Liechtenstein = new Country(126, nameof(Liechtenstein).ToLowerInvariant()); 
        public static Country SriLanka = new Country(127, nameof(SriLanka).ToLowerInvariant()); 
        public static Country Liberia = new Country(128, nameof(Liberia).ToLowerInvariant()); 
        public static Country Lesotho = new Country(129, nameof(Lesotho).ToLowerInvariant()); 
        public static Country Lithuania = new Country(130, nameof(Lithuania).ToLowerInvariant()); 
        public static Country Luxembourg = new Country(131, nameof(Luxembourg).ToLowerInvariant()); 
        public static Country Latvia = new Country(132, nameof(Latvia).ToLowerInvariant()); 
        public static Country LibyanArabJamahiriya = new Country(133, nameof(LibyanArabJamahiriya).ToLowerInvariant()); 
        public static Country Morocco = new Country(134, nameof(Morocco).ToLowerInvariant()); 
        public static Country Monaco = new Country(135, nameof(Monaco).ToLowerInvariant()); 
        public static Country MoldovaRepublicOf = new Country(136, nameof(MoldovaRepublicOf).ToLowerInvariant()); 
        public static Country Montenegro = new Country(137, nameof(Montenegro).ToLowerInvariant()); 
        public static Country Madagascar = new Country(138, nameof(Madagascar).ToLowerInvariant()); 
        public static Country MarshallIslands = new Country(139, nameof(MarshallIslands).ToLowerInvariant()); 
        public static Country Macedonia = new Country(140, nameof(Macedonia).ToLowerInvariant()); 
        public static Country Mali = new Country(141, nameof(Mali).ToLowerInvariant()); 
        public static Country Myanmar = new Country(142, nameof(Myanmar).ToLowerInvariant()); 
        public static Country Mongolia = new Country(143, nameof(Mongolia).ToLowerInvariant()); 
        public static Country Macau = new Country(144, nameof(Macau).ToLowerInvariant()); 
        public static Country NorthernMarianaIslands = new Country(145, nameof(NorthernMarianaIslands).ToLowerInvariant()); 
        public static Country Martinique = new Country(146, nameof(Martinique).ToLowerInvariant()); 
        public static Country Mauritania = new Country(147, nameof(Mauritania).ToLowerInvariant()); 
        public static Country Montserrat = new Country(148, nameof(Montserrat).ToLowerInvariant()); 
        public static Country Malta = new Country(149, nameof(Malta).ToLowerInvariant()); 
        public static Country Mauritius = new Country(150, nameof(Mauritius).ToLowerInvariant()); 
        public static Country Maldives = new Country(151, nameof(Maldives).ToLowerInvariant()); 
        public static Country Malawi = new Country(152, nameof(Malawi).ToLowerInvariant()); 
        public static Country Mexico = new Country(153, nameof(Mexico).ToLowerInvariant()); 
        public static Country Malaysia = new Country(154, nameof(Malaysia).ToLowerInvariant()); 
        public static Country Mozambique = new Country(155, nameof(Mozambique).ToLowerInvariant()); 
        public static Country Namibia = new Country(156, nameof(Namibia).ToLowerInvariant()); 
        public static Country NewCaledonia = new Country(157, nameof(NewCaledonia).ToLowerInvariant()); 
        public static Country Niger = new Country(158, nameof(Niger).ToLowerInvariant()); 
        public static Country NorfolkIsland = new Country(159, nameof(NorfolkIsland).ToLowerInvariant()); 
        public static Country Nigeria = new Country(160, nameof(Nigeria).ToLowerInvariant()); 
        public static Country Nicaragua = new Country(161, nameof(Nicaragua).ToLowerInvariant()); 
        public static Country Netherlands = new Country(162, nameof(Netherlands).ToLowerInvariant()); 
        public static Country Norway = new Country(163, nameof(Norway).ToLowerInvariant()); 
        public static Country Nepal = new Country(164, nameof(Nepal).ToLowerInvariant()); 
        public static Country Nauru = new Country(165, nameof(Nauru).ToLowerInvariant()); 
        public static Country Niue = new Country(166, nameof(Niue).ToLowerInvariant()); 
        public static Country NewZealand = new Country(167, nameof(NewZealand).ToLowerInvariant()); 
        public static Country Oman = new Country(168, nameof(Oman).ToLowerInvariant()); 
        public static Country Panama = new Country(169, nameof(Panama).ToLowerInvariant()); 
        public static Country Peru = new Country(170, nameof(Peru).ToLowerInvariant()); 
        public static Country FrenchPolynesia = new Country(171, nameof(FrenchPolynesia).ToLowerInvariant()); 
        public static Country PapuaNewGuinea = new Country(172, nameof(PapuaNewGuinea).ToLowerInvariant()); 
        public static Country Philippines = new Country(173, nameof(Philippines).ToLowerInvariant()); 
        public static Country Pakistan = new Country(174, nameof(Pakistan).ToLowerInvariant()); 
        public static Country Poland = new Country(175, nameof(Poland).ToLowerInvariant()); 
        public static Country StPierreAndMiquelon = new Country(176, nameof(StPierreAndMiquelon).ToLowerInvariant()); 
        public static Country Pitcairn = new Country(177, nameof(Pitcairn).ToLowerInvariant()); 
        public static Country PuertoRico = new Country(178, nameof(PuertoRico).ToLowerInvariant()); 
        public static Country Palestine = new Country(179, nameof(Palestine).ToLowerInvariant()); 
        public static Country Portugal = new Country(180, nameof(Portugal).ToLowerInvariant()); 
        public static Country Palau = new Country(181, nameof(Palau).ToLowerInvariant()); 
        public static Country Paraguay = new Country(182, nameof(Paraguay).ToLowerInvariant()); 
        public static Country Qatar = new Country(183, nameof(Qatar).ToLowerInvariant()); 
        public static Country Reunion = new Country(184, nameof(Reunion).ToLowerInvariant()); 
        public static Country Romania = new Country(185, nameof(Romania).ToLowerInvariant()); 
        public static Country Serbia = new Country(186, nameof(Serbia).ToLowerInvariant()); 
        public static Country RussianFederation = new Country(187, nameof(RussianFederation).ToLowerInvariant()); 
        public static Country Rwanda = new Country(188, nameof(Rwanda).ToLowerInvariant()); 
        public static Country SaudiArabia = new Country(189, nameof(SaudiArabia).ToLowerInvariant()); 
        public static Country SolomonIslands = new Country(190, nameof(SolomonIslands).ToLowerInvariant()); 
        public static Country Seychelles = new Country(191, nameof(Seychelles).ToLowerInvariant()); 
        public static Country Sudan = new Country(192, nameof(Sudan).ToLowerInvariant()); 
        public static Country Sweden = new Country(193, nameof(Sweden).ToLowerInvariant()); 
        public static Country Singapore = new Country(194, nameof(Singapore).ToLowerInvariant()); 
        public static Country StHelena = new Country(195, nameof(StHelena).ToLowerInvariant()); 
        public static Country Slovenia = new Country(196, nameof(Slovenia).ToLowerInvariant()); 
        public static Country SvalbardAndJanMayenIslands = new Country(197, nameof(SvalbardAndJanMayenIslands).ToLowerInvariant()); 
        public static Country Slovakia = new Country(198, nameof(Slovakia).ToLowerInvariant()); 
        public static Country SierraLeone = new Country(199, nameof(SierraLeone).ToLowerInvariant()); 
        public static Country SanMarino = new Country(200, nameof(SanMarino).ToLowerInvariant()); 
        public static Country Senegal = new Country(201, nameof(Senegal).ToLowerInvariant()); 
        public static Country Somalia = new Country(202, nameof(Somalia).ToLowerInvariant()); 
        public static Country Suriname = new Country(203, nameof(Suriname).ToLowerInvariant()); 
        public static Country SaoTomeAndPrincipe = new Country(204, nameof(SaoTomeAndPrincipe).ToLowerInvariant()); 
        public static Country ElSalvador = new Country(205, nameof(ElSalvador).ToLowerInvariant()); 
        public static Country SyrianArabRepublic = new Country(206, nameof(SyrianArabRepublic).ToLowerInvariant()); 
        public static Country Swaziland = new Country(207, nameof(Swaziland).ToLowerInvariant()); 
        public static Country TurksAndCaicosIslands = new Country(208, nameof(TurksAndCaicosIslands).ToLowerInvariant()); 
        public static Country Chad = new Country(209, nameof(Chad).ToLowerInvariant()); 
        public static Country FrenchSouthernTerritories = new Country(210, nameof(FrenchSouthernTerritories).ToLowerInvariant()); 
        public static Country Togo = new Country(211, nameof(Togo).ToLowerInvariant()); 
        public static Country Thailand = new Country(212, nameof(Thailand).ToLowerInvariant()); 
        public static Country Tajikistan = new Country(213, nameof(Tajikistan).ToLowerInvariant()); 
        public static Country Tokelau = new Country(214, nameof(Tokelau).ToLowerInvariant()); 
        public static Country Turkmenistan = new Country(215, nameof(Turkmenistan).ToLowerInvariant()); 
        public static Country Tunisia = new Country(216, nameof(Tunisia).ToLowerInvariant()); 
        public static Country Tonga = new Country(217, nameof(Tonga).ToLowerInvariant()); 
        public static Country EastTimor = new Country(218, nameof(EastTimor).ToLowerInvariant()); 
        public static Country Turkey = new Country(219, nameof(Turkey).ToLowerInvariant()); 
        public static Country TrinidadAndTobago = new Country(220, nameof(TrinidadAndTobago).ToLowerInvariant()); 
        public static Country Tuvalu = new Country(221, nameof(Tuvalu).ToLowerInvariant()); 
        public static Country Taiwan = new Country(222, nameof(Taiwan).ToLowerInvariant()); 
        public static Country Mayotte = new Country(223, nameof(Mayotte).ToLowerInvariant()); 
        public static Country TanzaniaUnitedRepublicOf = new Country(224, nameof(TanzaniaUnitedRepublicOf).ToLowerInvariant()); 
        public static Country Ukraine = new Country(225, nameof(Ukraine).ToLowerInvariant()); 
        public static Country Uganda = new Country(226, nameof(Uganda).ToLowerInvariant()); 
        public static Country UnitedStatesMinorOutlyingIslands = new Country(227, nameof(UnitedStatesMinorOutlyingIslands).ToLowerInvariant()); 
        public static Country UnitedStates = new Country(228, nameof(UnitedStates).ToLowerInvariant()); 
        public static Country Uruguay = new Country(229, nameof(Uruguay).ToLowerInvariant()); 
        public static Country Uzbekistan = new Country(230, nameof(Uzbekistan).ToLowerInvariant()); 
        public static Country VaticanCityState = new Country(231, nameof(VaticanCityState).ToLowerInvariant()); 
        public static Country SaintVincentAndTheGrenadines = new Country(232, nameof(SaintVincentAndTheGrenadines).ToLowerInvariant()); 
        public static Country Venezuela = new Country(233, nameof(Venezuela).ToLowerInvariant()); 
        public static Country VirginIslandsBritish = new Country(234, nameof(VirginIslandsBritish).ToLowerInvariant()); 
        public static Country VirginIslandsUS = new Country(235, nameof(VirginIslandsUS).ToLowerInvariant()); 
        public static Country Vietnam = new Country(236, nameof(Vietnam).ToLowerInvariant()); 
        public static Country Vanuatu = new Country(237, nameof(Vanuatu).ToLowerInvariant()); 
        public static Country WallisAndFutunaIslands = new Country(238, nameof(WallisAndFutunaIslands).ToLowerInvariant()); 
        public static Country Samoa = new Country(239, nameof(Samoa).ToLowerInvariant()); 
        public static Country Kosovo = new Country(240, nameof(Kosovo).ToLowerInvariant()); 
        public static Country Yemen = new Country(241, nameof(Yemen).ToLowerInvariant()); 
        public static Country SouthAfrica = new Country(242, nameof(SouthAfrica).ToLowerInvariant()); 
        public static Country Zambia = new Country(243, nameof(Zambia).ToLowerInvariant()); 
        public static Country Zaire = new Country(244, nameof(Zaire).ToLowerInvariant()); 
        public static Country Zimbabwe = new Country(245, nameof(Zimbabwe).ToLowerInvariant());

        public Country(int id, string name)
            : base(id, name)
        {
        }

        public static IEnumerable<Country> List() =>
            new[] {
                Andorra,
                UnitedArabEmirates,
                Afghanistan,
                AntiguaAndBarbuda,
                Anguilla,
                Albania,
                Armenia,
                NetherlandsAntilles,
                Angola,
                Antarctica,
                Argentina,
                Austria,
                Australia,
                Aruba,
                Azerbaijan,
                BosniaAndHerzegovina,
                Barbados,
                Bangladesh,
                Belgium,
                BurkinaFaso,
                Bulgaria,
                Bahrain,
                Burundi,
                Benin,
                Bermuda,
                BruneiDarussalam,
                Bolivia,
                Brazil,
                Bahamas,
                Bhutan,
                BouvetIsland,
                Botswana,
                Belarus,
                Belize,
                Canada,
                CocosKeelingIslands,
                CentralAfricanRepublic,
                Congo,
                Switzerland,
                IvoryCoast,
                CookIslands,
                Chile,
                Cameroon,
                China,
                Colombia,
                CostaRica,
                Cuba,
                CapeVerde,
                ChristmasIsland,
                Cyprus,
                CzechRepublic,
                Germany,
                Djibouti,
                Denmark,
                Dominica,
                DominicanRepublic,
                AmericanSamoa,
                Algeria,
                Ecuador,
                Estonia,
                Egypt,
                WesternSahara,
                Eritrea,
                Spain,
                Ethiopia,
                Finland,
                Fiji,
                FalklandIslandsMalvinas,
                MicronesiaFederatedStatesOf,
                FaroeIslands,
                France,
                FranceMetropolitan,
                Gabon,
                UnitedKingdom,
                Grenada,
                Georgia,
                FrenchGuiana,
                Ghana,
                Gibraltar,
                Guernsey,
                Greenland,
                Gambia,
                Guinea,
                Guadeloupe,
                EquatorialGuinea,
                Greece,
                SouthGeorgiaSouthSandwichIslands,
                Guatemala,
                Guam,
                GuineaBissau,
                Guyana,
                HongKong,
                HeardAndMcDonaldIslands,
                Honduras,
                CroatiaHrvatska,
                Haiti,
                Hungary,
                Indonesia,
                Ireland,
                Israel,
                IsleOfMan,
                India,
                BritishIndianOceanTerritory,
                Iraq,
                IranIslamicRepublicOf,
                Iceland,
                Italy,
                Jersey,
                Jamaica,
                Jordan,
                Japan,
                Kenya,
                Kyrgyzstan,
                Cambodia,
                Kiribati,
                Comoros,
                SaintKittsAndNevis,
                KoreaDemocraticPeoplesRepublicOf,
                KoreaRepublicOf,
                Kuwait,
                CaymanIslands,
                Kazakhstan,
                LaoPeoplesDemocraticRepublic,
                Lebanon,
                SaintLucia,
                Liechtenstein,
                SriLanka,
                Liberia,
                Lesotho,
                Lithuania,
                Luxembourg,
                Latvia,
                LibyanArabJamahiriya,
                Morocco,
                Monaco,
                MoldovaRepublicOf,
                Montenegro,
                Madagascar,
                MarshallIslands,
                Macedonia,
                Mali,
                Myanmar,
                Mongolia,
                Macau,
                NorthernMarianaIslands,
                Martinique,
                Mauritania,
                Montserrat,
                Malta,
                Mauritius,
                Maldives,
                Malawi,
                Mexico,
                Malaysia,
                Mozambique,
                Namibia,
                NewCaledonia,
                Niger,
                NorfolkIsland,
                Nigeria,
                Nicaragua,
                Netherlands,
                Norway,
                Nepal,
                Nauru,
                Niue,
                NewZealand,
                Oman,
                Panama,
                Peru,
                FrenchPolynesia,
                PapuaNewGuinea,
                Philippines,
                Pakistan,
                Poland,
                StPierreAndMiquelon,
                Pitcairn,
                PuertoRico,
                Palestine,
                Portugal,
                Palau,
                Paraguay,
                Qatar,
                Reunion,
                Romania,
                Serbia,
                RussianFederation,
                Rwanda,
                SaudiArabia,
                SolomonIslands,
                Seychelles,
                Sudan,
                Sweden,
                Singapore,
                StHelena,
                Slovenia,
                SvalbardAndJanMayenIslands,
                Slovakia,
                SierraLeone,
                SanMarino,
                Senegal,
                Somalia,
                Suriname,
                SaoTomeAndPrincipe,
                ElSalvador,
                SyrianArabRepublic,
                Swaziland,
                TurksAndCaicosIslands,
                Chad,
                FrenchSouthernTerritories,
                Togo,
                Thailand,
                Tajikistan,
                Tokelau,
                Turkmenistan,
                Tunisia,
                Tonga,
                EastTimor,
                Turkey,
                TrinidadAndTobago,
                Tuvalu,
                Taiwan,
                Mayotte,
                TanzaniaUnitedRepublicOf,
                Ukraine,
                Uganda,
                UnitedStatesMinorOutlyingIslands,
                UnitedStates,
                Uruguay,
                Uzbekistan,
                VaticanCityState,
                SaintVincentAndTheGrenadines,
                Venezuela,
                VirginIslandsBritish,
                VirginIslandsUS,
                Vietnam,
                Vanuatu,
                WallisAndFutunaIslands,
                Samoa,
                Kosovo,
                Yemen,
                SouthAfrica,
                Zambia,
                Zaire,
                Zimbabwe
            };

        

        public static Country FromName(string name)
        {
            var country = List()
                .SingleOrDefault(s => String.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

            if (country == null)
            {
                throw new DomainException($"Possible values for Country: {String.Join(",", List().Select(s => s.Name))}");
            }

            return country;
        }

        public static Country From(int id)
        {
            var country = List().SingleOrDefault(s => s.Id == id);

            if (country == null)
            {
                throw new DomainException($"Possible values for Country: {String.Join(",", List().Select(s => s.Id))}");
            }

            return country;
        }

        public static bool Exists(int id)
        {
            var country = List().SingleOrDefault(s => s.Id == id);

            return country is not null;
        }
    }
}