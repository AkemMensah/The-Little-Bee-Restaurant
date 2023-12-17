from django import forms

from .models import OrdersForm

class OrdersForm(forms.ModelForm):
    class Meta:
        model = OrdersForm
        fields = [
            'name',
            'menu', 
            'phone',
            'email',
            'address',
            'request' ]

class RawhtmlForm(forms.Form):
    # experimenting with widgets
    username = forms.CharField(widget=forms.Textarea(attrs={'rows':5,'cols':50,'placeholder':"TextInput: I'm a CharField, just messing around",'id':'username'}))
    email = forms.EmailField()

    # You can define methods here that handle each field
    def clean_username(self, *args, **kwargs):
        username= self.cleaned_data.get('username')
        if '@' in username:
            raise forms.ValidationError("Your email cannot be your username")
        return username

    def clean_email(self,**kwargs):
        email = self.cleaned_data.get('email')
        if not email.endswith('edu'):
            raise forms.ValidationError('This is not a valid email')
        return email