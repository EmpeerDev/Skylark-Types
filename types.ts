export interface ReduxState {
  user: string;
  token: string;
}
export enum OTPTypes {
  EMAIL = 'EMAIL',
  NUMBER = 'NUMBER',
}
export interface OTPPayload {
  email: string;
  type: OTPTypes;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  walletAddress: string;
  chainId: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;
  roles: string[];
  points: number;
  referralCode: string;
  communityEarlyAccessCode: string;
  accessCodeVerified: boolean;
  TCaccepted: boolean;
  userImgId: string;
  userImgUrl: string;
  twitterUser: TwitterUser;
  walletProvider: string[];
  badges: Badge[];
  joinedCommunities: CommunityData[];
  CommunityOwner: CommunityData[];
  participatedActivations: ActivationData[];
  participatedQuests: Quest[];
  wonActivations: ActivationData[];
  referBy: string[];
  referById: string[];
  referTo: string[];
  referToIds: string[];
  claimedRewards: string[];
  participated: boolean;
}
export interface CommunityData {
  name: string;
  description: string;
  websiteUrl: string;
  communityUrl: string;
  coverImgUrl: string;
  flare?: string;
}
export interface RewardData {
  id: string;
  activationId: string;
  numberOfWinners: number;
  name: string;
  priceValue: number;
  totalValue: number;
  message: string;
}

enum SelectionCriteria {
  FirstComeFirstServe = 'First_Come_First_Serve',
  OtherOption = 'Lucky_Draw',
}

export interface ImageModalProps {
  isVisible: boolean;
  onClose: () => void;
  activationQuestsData: Quest[] | null;
}

export interface ActivationData {
  id: string;
  name: string;
  activationId?: string;
  description: string;
  campaignId: string;
  rewardPoints: number;
  imageUrl: string;
  selectionCriteria: SelectionCriteria;
  claimEndDate: string;
  emailWinners: boolean;
  allowRedraw: boolean;
  startDate: string;
  endDate: string;
  campaign: CampaignData | null;
  Reward: RewardData[];
  claimedRewards: any[];
  status: Status;
  Participants: ParticipantData[];
  Quests?: Quest[];
  dpImgUrl?: string;
}

export interface CampaignData {
  community: CommunityData | null;
}
export interface ParticipantData {
  id: string;
  activationId: string;
  position: string;
  completed: boolean;
  completionDate: string;
  enteries: number;
  ipAddress: string;
  activation: ActivationData; // Reference back to Activation
  user: User;
  participated?: boolean;
}
export enum Status {
  Launched = 'Launched',
  Completed = 'Completed',
  Draft = 'Draft',
  Ended = 'Ended',
  WinnerSelection = 'WinnerSelection',
  Pause = 'Pause',
  Created = 'Created',
  PrizeClaiming = 'PrizeClaiming',
}

export interface QuestData {
  name: string;
  description: string;
  mandatory: boolean;
  enteries: number;
  type: string;
}

export interface TwitterUser {
  id: string;
  twitterId: string;
  twitterUserName: string;
  verificationTweetUrl: string;
  userId: string;
}

export interface Badge {
  // Define fields based on the actual structure of badges
  id: string;
  name: string;
  description?: string;
  earnedAt?: string;
}

export interface RewardData {
  numberOfWinners: number;
  name: string;
  priceValue: number;
  totalValue: number;
  message: string;
}

export interface quizData {
  userAnswer: string;
}

export interface Quest {
  id: string;
  activationId?: string;
  questId?: string;
  name: string;
  description: string;
  mandatory: boolean;
  src: any;
  enteries: number;
  prompt?: string;
  inputDescription: string;
  inputOptions?: string[];
  pollOptions?: string[];
  inputAnswer?: string;
  correctAnswer?: string;
  correctOptionIndex?: number;
  placeholder?: string;
  answerPlaceholder?: string;
  pollPlaceholder?: string;
  answerPrompt?: string;
  isCaseSensitive?: boolean;
  type: string;
  cases?: string[];
  LikeTweet?: any;
  Retweet?: any;
  FollowPage?: any;
  QuoteTweet?: any;
  FollowInstagram?: any;
  LikeInstagramPost?: any;
  Email?: any;
  PhoneNumber?: any;
  GeneralInput?: any;
  maxEnteries?: number;
  maxParticipants?: number;
  participants: QuestParticipant[];
  QuizQuest?: QuizQuest;
  UploadQuest?: UploadQuest;
  PollQuest?: PollQuest;
  InputQuest?: InputQuest;
  TwitterQuest?: TwitterQuest;
  InstagramQuest?: InstagramQuest;
  VisitWebsiteQuest?: VisitWebsiteQuest;
  LinkedinQuest?: LinkedinQuest;
  TelegramQuest?: TelegramQuest;
  ImageGenerationQuest?: ImageGenerationQuest;
  filteredParticipants?: QuestParticipant[];
  participated?: boolean;
}

export interface QuizQuest {
  id: string;
  quest: Quest;
  questId: string;
  question?: string;
  options: string[];
  correctOptionIndex?: number;
  correctAnswer: string;
  isCaseSensitive: boolean;
}

// UploadQuest Interface
export interface UploadQuest {
  id: string;
  quest: Quest;
  questId: string;
  prompt: string;
}

// PollQuest Interface
export interface PollQuest {
  id: string;
  quest: Quest;
  questId: string;
  question: string;
  options: string[];
}

// InputQuest Interface
export interface InputQuest {
  id?: string;
  quest: Quest;
  questId: string;
  question: string;
  prompt: string;
  inputType?: InputType;
}

// Enum for InputType
export enum InputType {
  Email = 'Email',
  PhoneNumber = 'PhoneNumber',
  GeneralInput = 'GeneralInput',
}

// TwitterQuest Interface
export interface TwitterQuest {
  id?: string;
  quest: Quest;
  questId: string;
  tweetId: string;
  questType: TwitterQuestType;
}

// Enum for TwitterQuestType
export enum TwitterQuestType {
  Like = 'Like',
  Retweet = 'Retweet',
  Follow = 'Follow',
  Quote = 'Quote',
  SpecificTweet = 'SpecificTweet',
}

// InstagramQuest Interface
export interface InstagramQuest {
  id?: string;
  quest: Quest;
  questId: string;
  postUrl: string;
  type: InstagramQuestType;
}

// Enum for InstagramQuestType
export enum InstagramQuestType {
  Like = 'Like',
  Follow = 'Follow',
}

// LinkedInQuest Interface
export interface LinkedinQuest {
  id?: string;
  quest: Quest;
  questId: string;
  postUrl: string;
  type: LinkedinQuestType;
}

// Enum for LinkedInQuestType
export enum LinkedinQuestType {
  Like = 'Like',
  Follow = 'Follow',
}

// VisitWebsiteQuest Interface
export interface VisitWebsiteQuest {
  id: string;
  quest: Quest;
  questId: string;
  websiteUrl: string;
}

// TelegramQuest Interface
export interface TelegramQuest {
  id: string;
  quest: Quest;
  questId: string;
  channelUrl: string;
}

// ImageGenerationQuest Interface
export interface ImageGenerationQuest {
  id: string;
  quest: Quest;
  questId: string;
  prompt: string;
  maxEnteries: number;
}

export interface QuestParticipant {
  id: string;
  userId: string;
  questId: string;
  participated: boolean;
  completedAt: string;
  quizUserAnswer: string;
  quizUserCorrect: boolean;
  inputUserAnswer: string | null;
  uploadedFileId: string | null;
  uploadedFileUrl: string | null;
  pollUserOption: number;
  imageNames: string[];
  numberOfChances: number;
  userPrompts: string[];
  storedImageName: string;
}
