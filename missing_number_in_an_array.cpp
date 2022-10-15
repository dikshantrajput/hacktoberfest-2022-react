
class Solution{
  public:
    int MissingNumber(vector<int>& array, int n) {
        // Your code goes here
        
        int m = array.size();
        int sn = n * (n+1)/2;
        
        int sum = 0;
        for(int i=0;i<m;i++){
            sum=sum+array[i];
        }
        int k = sn-sum;
        return k;
    }
};
